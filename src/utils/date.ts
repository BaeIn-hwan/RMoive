import dayjs from "dayjs";

export const getDate = (currentDate: string) => {
  const day = dayjs(currentDate);

  const year = day.format("YYYY");
  const month = day.format("MM");
  const date = day.format("DD");

  return `${year}.${month}.${date}`;
};
