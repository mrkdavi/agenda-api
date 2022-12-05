import { NoteRequestData } from '../@types/DTOs/NoteDTO';
import { INoteRepository } from '../@types/repositories/INoteRepository';
import { Note } from '../entities/Note/Note';
import { prisma } from '../lib/prisma';

export class NoteRepository implements INoteRepository {
  async createNote ({ subject, content, userId }: NoteRequestData) {
    return new Note(await prisma.note.create({
      data: {
        subject,
        content,
        userId
      }
    }));
  }
}
