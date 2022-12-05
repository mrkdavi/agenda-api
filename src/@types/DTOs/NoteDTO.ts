export interface NoteRequestData {
  userId:string;
  subject?: string;
  content:string;
}

export interface NoteUpdateRequestData {
  subject?:string;
  content:string;
}

export interface UserNoteQuery {
  id?: string;
  userId?: string;
  subject?: string;
  content?:string;
}
