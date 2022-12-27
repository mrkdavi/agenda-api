export interface ContactRequestData {
  userId: string;
  name: string;
  phone: string;
  note?: string;
}

export interface ContactResponseData {
  userId: string;
  name: string;
  phone: string;
  note: string | null;
}
