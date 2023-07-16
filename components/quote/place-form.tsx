"use client";

import { useRouter } from "next/navigation";
import { BaseForm } from "./base-form";
import { useState } from "react";

export const PlaceQuoteForm = function PlaceQuoteForm({
  service,
  pages,
  timeframe,
}: {
  service: "frontend" | "backend" | "fullstack";
  pages: number;
  timeframe: number;
}) {
  const router = useRouter();
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
          onClick: () => {
            router.push("/quote/place/success");
          },
        },
      }}
    />
  );
};
