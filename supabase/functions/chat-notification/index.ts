import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { supabase } from "../_utils/supabase.ts";
import type { Database } from "../_utils/types.ts";
import type { WebhookPayload } from "../_utils/webhooks.types.ts";

type NotificationRequestPayload =
  | (WebhookPayload<Database["public"]["Tables"]["chat_messages"]["Row"]> & {
      table: "chat_messages";
    })
  | (WebhookPayload<Database["public"]["Tables"]["reviews"]["Row"]> & {
      table: "reviews";
    });

serve(async (req: Request) => {
  try {
    const body: NotificationRequestPayload = await req.json();

    if (body.table === "reviews" && body.type !== "UPDATE") {
      console.log("Ignoring non-update review");
      return new Response(JSON.stringify({ success: true, ignore: true }), {
        headers: { "Content-Type": "application/json" },
        status: 200,
      });
    }

    const notifyType =
      body.table === "chat_messages"
        ? "chat_notification"
        : "reviews_notification";

    const { data } = await supabase
      .from("admins")
      .select(
        "profiles (id, notification_token, chat_notification, reviews_notification, deadline_notification)",
      );

    const tokens = data
      ?.filter(
        (admin) =>
          admin.profiles?.notification_token &&
          admin.profiles?.[notifyType] &&
          (body.table === "chat_messages"
            ? admin.profiles?.id !== body.record.owner
            : true),
      )
      .map((admin) => admin.profiles?.notification_token);

    if (!tokens) {
      throw new Error("No tokens found");
    }

    let name = "Unknown";
    let title = "New message";
    let notificationBody = "New message";

    if (body.table === "chat_messages") {
      const { data: userData } = await supabase
        .from("profiles")
        .select("full_name")
        .eq("id", body.record.owner)
        .single();

      name = userData?.full_name || "Unknown";
      title = name;
      notificationBody = body.record.content;
    } else {
      name = body.record.name || "Unknown";
      title = `New review from ${name}`;
      notificationBody = body.record.comment || "N/A";
    }

    await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: tokens,
        title,
        body: notificationBody,
        sound: "default",

        data:
          body.table === "chat_messages"
            ? {
                type: "CHAT_MESSAGE",
                chatId: body.record.chat,
              }
            : undefined,
      }),
    });

    console.log(`Processed notification to ${tokens.length} users`);

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json" },
      status: 400,
    });
  }
});
