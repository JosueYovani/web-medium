export function parseDateMd(dateString) {
  const options = { month: "short", day: "numeric" };
  const parsedDate = new Date(dateString);
  const formattedDate = parsedDate.toLocaleDateString("en-US", options);
  return formattedDate;
}
