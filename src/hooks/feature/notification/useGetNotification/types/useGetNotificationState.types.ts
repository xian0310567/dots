export type GetNotificationStateCallback = {
  notice: Notice[];
  setNotice: React.Dispatch<React.SetStateAction<Notice[]>>;
};

export type Notice = {
  id: number;
  title: string;
  date: string;
  contents: string;
};
