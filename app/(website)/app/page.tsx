"use client";

import type { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AppPage() {
  const supabase = createClientComponentClient<Database>();
  const [orders, setOrders] = useState<
    (Database["public"]["Tables"]["chats"]["Row"] & {
      commissions?: Database["public"]["Tables"]["commissions"]["Row"] & {
        invoices: Database["public"]["Tables"]["invoices"]["Row"][];
      };
    })[]
  >([]);

  useEffect(() => {
    supabase
      .from("chats")
      .select("*, commissions (*, invoices (*))")
      .then(({ data }) => {
        if (!data) return;
        setOrders(
          data.map((order) => ({
            ...order,
            commissions: order.commissions[0],
          })),
        );
      });
  }, [supabase]);

  return (
    <Suspense>
      <div className="flex flex-col gap-4 w-full">
        <div className="mt-20">
          <Image
            className="hidden md:block absolute left-1/4 -top-10 w-[800px] -z-10 select-none"
            src="/img/blue-blur.svg"
            alt="blur"
            width={100}
            height={100}
            placeholder="empty"
            draggable={false}
          />
          <h1 className="text-primary font-extrabold text-4xl uppercase text-center">
            Welcome back! Here are your orders.
          </h1>
          <h2 className="text-gray-400 text-center">
            This is your personal portal. Here you can manage your orders and
            chat with me!
          </h2>
        </div>
        {orders.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-4 my-auto mt-20">
            <h2 className="text-gray-400">No orders yet!</h2>
          </div>
        )}
        <div className="flex flex-col xl:flex-row gap-4">
          {orders.map((order) => (
            <div
              className="custom-card p-6 w-full xl:w-fit flex flex-col gap-2 mt-6 min-w-[300px]"
              key={order.id}
            >
              <h2 className="text-xl font-bold">Order #{order.id}</h2>
              <div className="flex flex-col gap-1">
                <p className="text-lg">
                  Description: {order.commissions?.description}
                </p>
                <p className="text-lg">
                  Deadline: {order.commissions?.deadline}
                </p>
                <p className="text-lg">Price: €{order.commissions?.value}</p>
                <p className="text-lg">
                  Invoices: {order.commissions?.invoices.length || 0}
                </p>
              </div>
              {!order.commissions?.complete && (
                <Link
                  href={"/app/chat/" + order.id}
                  className="mt-auto custom-button"
                >
                  Open chat
                </Link>
              )}
              {order.commissions?.complete && (
                <button
                  className="mt-auto custom-button"
                  onClick={async () => {
                    const { data } = await supabase.storage
                      .from("uploads")
                      .download(order.commissions?.archivie || "");
                    const url = window.URL.createObjectURL(data!);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = "complete.zip";
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                    window.URL.revokeObjectURL(url);
                  }}
                >
                  Download assets
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  );
}
