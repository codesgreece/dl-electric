export function cn(...classes: Array<string | number | boolean | null | undefined>) {
  return classes.filter((value): value is string => typeof value === "string" && value.length > 0).join(" ");
}

export function formatDate(date: Date | string) {
  return new Intl.DateTimeFormat("el-GR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}
