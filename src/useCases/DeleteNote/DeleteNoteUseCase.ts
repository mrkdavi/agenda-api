import NotFound from '../../@types/errors/NotFound';
import { INoteRepository } from '../../@types/repositories/INoteRepository';

export class DeleteNoteUseCase {
  constructor (private noteRepository: INoteRepository) {}

  async execute (id: string, userId: string) {
    const note = await this.noteRepository.findOneUserNotes({ id, userId });

    if (!note) throw new NotFound('User has no note with this id!');

    await this.noteRepository.deleteNote(id);
  }
}
