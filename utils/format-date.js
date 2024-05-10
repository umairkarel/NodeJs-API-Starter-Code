/**
 * Return date in format - <Month><Day>, <Year>
 * @param {Date} date
 * @returns
 */
export const formatDate = (date, options) => {
  const defaultOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const formattedDate = new Date(date).toLocaleDateString(
    "en-US",
    options || defaultOptions,
  );
  return formattedDate;
};
