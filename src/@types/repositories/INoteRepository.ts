import { Note } from '../../entities/Note/Note';
import { NoteRequestData } from '../DTOs/NoteDTO';

export interface INoteRepository {
  createNote(noteRequestData : NoteRequestData): Promise<Note>;
}
