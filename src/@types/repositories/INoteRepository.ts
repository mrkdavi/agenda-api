import { Note } from '../../entities/Note/Note';
import { NoteRequestData, UserNoteQuery } from '../DTOs/NoteDTO';

export interface INoteRepository {
  createNote(noteRequestData : NoteRequestData): Promise<Note>;
  updateNote (id: string, noteRequestData: NoteRequestData): Promise<Note>
  deleteNote (id: string): Promise<void>
  findAllUserNotes (userId: string): Promise<Note[]>
  findOneUserNotes({ id, userId }: UserNoteQuery): Promise<Note | null>
}
