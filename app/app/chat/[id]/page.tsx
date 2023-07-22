import ChatScreen from "@/components/chat/screen";
import { Suspense } from "react";

export default function ChatPage() {
  return (
    <div className="w-full flex flex-col h-full gap-2">
      <Suspense fallback={<div></div>}>
        <ChatScreen />
      </Suspense>
    </div>
  );
}
