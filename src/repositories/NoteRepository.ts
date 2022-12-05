import { NoteRequestData } from '../@types/DTOs/NoteDTO';
import { INoteRepository } from '../@types/repositories/INoteRepository';
import { Note } from '../entities/Note/Note';
import { prisma } from '../lib/prisma';

export class NoteRepository implements INoteRepository {
  async createNote (noteData : NoteRequestData) {
    const { content, subject, userId, user } = new Note(await prisma.note.create({
      data: {
        subject: noteData.subject,
        content: noteData.content,
        userId: noteData.userId
      }
    }));
    return { content, subject, userId, user } as Note;
  }

  async findAllUserNotes (userId: string) {
    const notes = await prisma.note.findMany({
      where: { userId }
    });

    return notes.map((note) => {
      const { content, subject, userId, user } = new Note(note);
      return { content, subject, userId, user } as Note;
    });
  }
}
