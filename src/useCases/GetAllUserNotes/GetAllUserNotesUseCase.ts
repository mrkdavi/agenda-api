import { INoteRepository } from '../../@types/repositories/INoteRepository';

export class GetAllUserNotesUseCase {
  constructor (private noteRepository: INoteRepository) {}

  async execute (userId: string) {
    const notes = await this.noteRepository.findAllUserNotes(userId);
    return notes;
  }
}
