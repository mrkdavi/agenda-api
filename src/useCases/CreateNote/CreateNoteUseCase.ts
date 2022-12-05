import { NoteRequestData } from '../../@types/DTOs/NoteDTO';
import { INoteRepository } from '../../@types/repositories/INoteRepository';

export class CreateNoteUseCase {
  constructor (private noteRepository: INoteRepository) {}

  async execute ({ subject, content, userId }: NoteRequestData) {
    const note = await this.noteRepository.createNote({
      content,
      userId,
      subject
    });
    return note;
  }
}
