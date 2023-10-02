export interface DaysServiceCallback {
  useGetAllDatesInThisMonth: () => GetAllDatesInThisMonthCallback[];
}

export interface GetAllDatesInThisMonthCallback {
  date: string;
  daysOfTheWeek: string;
}
