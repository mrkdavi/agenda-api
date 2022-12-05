import { NoteRequestData } from '../../@types/DTOs/NoteDTO';
import NotFound from '../../@types/errors/NotFound';
import { INoteRepository } from '../../@types/repositories/INoteRepository';

export class UpdateNoteUseCase {
  constructor (private noteRepository: INoteRepository) {}

  async execute (id: string, noteData: NoteRequestData) {
    const note = await this.noteRepository.findOneUserNotes({
      id,
      userId: noteData.userId
    });

    if (!note) throw new NotFound('User has no note with this id!');

    const updatedNote = await this.noteRepository.updateNote(id, noteData);

    return updatedNote;
  }
}
