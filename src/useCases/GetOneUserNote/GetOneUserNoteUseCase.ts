import NotFound from '../../@types/errors/NotFound';
import { INoteRepository } from '../../@types/repositories/INoteRepository';

export class GetOneUserNoteUseCase {
  constructor (private noteRepository: INoteRepository) {}

  async execute (id: string, userId: string) {
    const note = await this.noteRepository.findOneUserNotes({ id, userId });

    if (!note) throw new NotFound('User has no note with this id!');

    return note;
  }
}
