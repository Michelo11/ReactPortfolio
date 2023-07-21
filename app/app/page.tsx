"use client";

import type { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AppPage() {
  const supabase = createClientComponentClient<Database>();
  const [orders, setOrders] = useState<
    (Database["public"]["Tables"]["commissions"]["Row"] & {
      invoices: Database["public"]["Tables"]["invoices"]["Row"][];
    })[]
  >([]);

  useEffect(() => {
    supabase
      .from("commissions")
      .select("*, invoices (*)")
      .then(({ data }) => {
        if (!data) return;

        setOrders(data);
      });
  }, [supabase]);

  return (
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
          This is your personal portal. Here you can manage your orders and chat
          with me!
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        {orders.map((order) => (
          <div
            className="custom-card p-4 w-fit flex flex-col gap-2"
            key={order.id}
          >
            <h2 className="text-xl font-bold">Order #{order.id}</h2>
            <div className="flex flex-col gap-1">
              <p className="text-lg">Description: {order.description}</p>
              <p className="text-lg">Deadline: {order.deadline}</p>
              <p className="text-lg">Price: €{order.value}</p>
              <p className="text-lg">Invoices: {order.invoices.length || 0}</p>
            </div>
            <Link href={"/app/chat/" + 0} className="mt-auto custom-button">
              Open chat
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
