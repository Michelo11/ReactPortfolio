"use client";

import AuthForm from "@/components/auth-form";
import { Suspense } from "react";

export default function RegisterPage() {
  return (
    <Suspense fallback={<div></div>}>
      <AuthForm mode="register" />
    </Suspense>
  );
}
