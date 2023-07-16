"use client";

import { useQuoteCalculator } from "@/utils/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BaseForm } from "./base-form";

export const QuoteForm = function QuoteForm() {
  const [service, setService] = useState<"frontend" | "backend" | "fullstack">(
    "frontend",
  );
  const [pages, setPages] = useState(1);
  const [timeframe, setTimeframe] = useState(7);
  const router = useRouter();

  const price = useQuoteCalculator(service, pages, timeframe);

  return (
    <BaseForm
      inputs={[
        {
          label: "Service",
          type: "select",
          options: ["frontend", "backend", "fullstack"],
          value: service,
          onChange: setService,
        },
        {
          label: "Pages",
          type: "range",
          min: 1,
          max: 10,
          value: pages,
          onChange: setPages,
        },
        {
          label: "Timeframe",
          type: "range",
          min: 7,
          max: 28,
          value: timeframe,
          onChange: setTimeframe,
          step: 7,
        },
      ]}
      display={{
        title: "Your Quote",
        description:
          "Here's a rough quote based on the information you provided",
        items: [
          {
            name: "Service",
            value: service,
          },
          {
            name: "Pages",
            value: pages,
          },
          {
            name: "Timeframe",
            value: `${timeframe / 7} weeks`,
          },
        ],
        price: price,
        button: {
          text: "Place Order",
          onClick: () => {
            router.push(
              `/quote/place?service=${service}&pages=${pages}&timeframe=${timeframe}`,
            );
          },
        },
      }}
    />
  );
};
