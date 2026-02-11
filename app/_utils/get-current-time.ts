export function getCurrentTime() {
  const now = new Date();

  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "America/Fortaleza",
    timeZoneName: "short",
  });

  const parts = formatter.formatToParts(now);

  const hour = parts.find((p) => p.type === "hour")?.value;
  const minute = parts.find((p) => p.type === "minute")?.value;
  const dayPeriod = parts.find((p) => p.type === "dayPeriod")?.value;
  const timeZone = parts.find((p) => p.type === "timeZoneName")?.value;

  return `${hour}:${minute} ${dayPeriod} ${timeZone}`;
}
