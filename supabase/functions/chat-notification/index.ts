import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { supabase } from "../_utils/supabase.ts";
import type { Database } from "../_utils/types.ts";
import type { InsertPayload } from "../_utils/webhooks.types.ts";

serve(async (req: Request) => {
  try {
    const body: InsertPayload<
      Database["public"]["Tables"]["chat_messages"]["Row"]
    > = await req.json();

    const { data } = await supabase
      .from("admins")
      .select("profiles (id, notification_token)");

    const tokens = data
      ?.filter(
        (admin) =>
          admin.profiles?.notification_token &&
          admin.profiles?.id !== body.record.owner,
      )
      .map((admin) => admin.profiles?.notification_token);

    if (!tokens) {
      throw new Error("No tokens found");
    }

    const { data: userData } = await supabase
      .from("profiles")
      .select("full_name")
      .eq("id", body.record.owner)
      .single();

    await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: tokens,
        title: userData?.full_name || "Unknown",
        body: body.record.content,
        sound: "default",

        data: {
          type: "CHAT_MESSAGE",
          chatId: body.record.chat,
        },
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
