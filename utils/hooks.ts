import { useMemo } from "react";

export const useQuoteCalculator = (
  service: "frontend" | "backend" | "fullstack",
  pages: number,
  timeframe: number,
) => {
  return useMemo(() => {
    let price = 0;

    if (service === "frontend") {
      price = 75;
    } else if (service === "backend") {
      price = 30;
    } else if (service === "fullstack") {
      price = 90;
    }

    let totalPrice = price * pages;

    let timeMultiplier = 2;
    let estimatedTime = pages * timeMultiplier;

    if (timeframe > estimatedTime) {
      totalPrice -= 10;
    } else if (timeframe < estimatedTime) {
      totalPrice += 20;
    }

    return totalPrice;
  }, [service, pages, timeframe]);
};
