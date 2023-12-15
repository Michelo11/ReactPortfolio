"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Alert from "./alert";

export default function AlertContainer() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (
      !searchParams ||
      (!searchParams.has("success") && !searchParams.has("error"))
    )
      return;
    setTimeout(() => {
      router.replace(pathName, undefined);
    }, 2000);
  }, [searchParams, pathName, router]);

  if (searchParams.has("success") || searchParams.has("error")) {
    return (
      <div className="fixed w-screen top-4 left-0 flex flex-col justify-center items-center z-10">
        <Alert message={searchParams.get("error") as string} />
      </div>
    );
  }

  return null;
}
