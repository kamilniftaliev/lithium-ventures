export function formatTime(dateString: string) {
  const options = {
    month: "short",
    day: "numeric",
    weekday: "short",
  } as Intl.DateTimeFormatOptions;

  // return new Date(dateString).toLocaleDateString(undefined, options)
  const date = new Date(dateString);
  const presentDate = new Date();

  // If difference is more than 1 year, show the exact year too
  if (presentDate.getUTCFullYear() - date.getUTCFullYear() > 1) {
    options.year = "numeric";
  }

  const oneDay = 1000 * 60 * 60 * 24;

  // If difference is less than 1 day, show time too
  if (date.getTime() - presentDate.getTime() < oneDay) {
    options.hour = "numeric";
    options.minute = "numeric";
  }

  const timeFormatter = new Intl.DateTimeFormat("en", options);

  return timeFormatter.format();
}
