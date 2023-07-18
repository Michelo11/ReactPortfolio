import moment from "moment";

function dateString(date: string) {
  const today = moment().endOf("day");
  const tomorrow = moment().add(1, "day").endOf("day");

  const dateMoment = moment(date);

  if (dateMoment.isSame(today, "day")) {
    return `Today at ${dateMoment.format("HH:mm")}`;
  }

  if (dateMoment.isSame(tomorrow, "day")) {
    return `Tomorrow at ${dateMoment.format("HH:mm")}`;
  }

  return dateMoment.format("DD/MM/YYYY [at] HH:mm");
}

export default function ChatBubble({
  message,
  self,
  date,
}: {
  message: string;
  self: boolean;
  date: string | undefined;
}) {
  return (
    <div className="w-full">
      {date && (
        <div
          className={
            "text-xs text-slate-500 " + (self ? "text-right" : "text-left")
          }
        >
          {dateString(date)}
        </div>
      )}

      <div
        className={
          "w-fit max-w-md " + (self ? "ml-auto chat-end" : "chat-start")
        }
      >
        <div
          className={
            "chat-bubble " + (self ? "chat-bubble-primary" : "bg-slate-700/30")
          }
        >
          {message}
        </div>
      </div>
    </div>
  );
}
