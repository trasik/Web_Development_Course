function getDate() {
  const dateOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const today = new Date();
  const currentDay = today.toLocaleDateString("en-US", dateOptions);
  return currentDay;
}

export default getDate;
