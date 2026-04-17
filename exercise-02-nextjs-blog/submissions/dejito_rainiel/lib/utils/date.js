export function splitDate(dateStr) {
  const d = new Date(dateStr);

  return {
    month: d.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
    day: d.getDate(),
    year: d.getFullYear(),
  };
}
