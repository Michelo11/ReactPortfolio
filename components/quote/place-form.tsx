"use client";

import type { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { BaseForm } from "./base-form";
import { useRouter, useSearchParams } from "next/navigation";

export const PlaceQuoteForm = function PlaceQuoteForm() {
  const supabase = createClientComponentClient<Database>();

  const router = useRouter();
  const params = useSearchParams();
  const service = params.get("service") as "frontend" | "backend" | "fullstack";
  const pages = Number(params.get("pages") as string);
  const timeframe = Number(params.get("timeframe") as string);

  const [description, setDescription] = useState("N/A");
  const [references, setReferences] = useState("N/A");

  return (
    <BaseForm
      inputs={[
        {
          label: "Description",
          type: "textarea",
          value: description,
          onChange: setDescription,
        },
        {
          label: "References",
          type: "text",
          value: references,
          onChange: setReferences,
        },
      ]}
      display={{
        title: "Your Order",
        description: "Here's the details of your order.",
        items: [
          {
            name: "Service",
            value: service,
          },
          {
            name: "Pages & Timeframe",
            value: pages + ` pages in ${timeframe / 7} weeks`,
          },
          {
            name: "Description & References",
            value: `${description}. References: ${references}`,
          },
        ],
        price: -1,
        button: {
          text: "Place Order",
          description:
            'By clicking "Place Order", you\'ll start a chat with me to get a real quote.',
          onClick: async () => {
            try {
              supabase
                .from("chats")
                .insert({})
                .select()
                .throwOnError()
                .then(async (res) => {
                  if (res.data && res.data[0].id) {
                    supabase
                      .from("chat_messages")
                      .insert({
                        chat: res.data[0].id,
                        content: `I'd like to order a ${service} project with ${pages} pages in ${
                          timeframe / 7
                        } weeks. ${description}. References: ${references}`,
                      })
                      .then((r) => {
                        console.log(r);
                        router.push(`/app/chat/${res.data[0].id}`);
                      });
                  }
                });
            } catch (err) {
              console.error(err);
            }
          },
        },
      }}
    />
  );
};
