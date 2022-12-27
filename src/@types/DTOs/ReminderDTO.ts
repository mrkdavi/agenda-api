export interface ReminderRequestData {
  userId: string;
  name: string;
  note?: string | null;
  remindAt: Date;
  reminded: boolean | null;
}

export interface ReminderResponseData {
  userId: string;
  name: string;
  note?: string | null;
  remindAt: Date;
  reminded: boolean | null;
}
