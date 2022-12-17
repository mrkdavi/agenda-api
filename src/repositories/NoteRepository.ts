import { Note as NoteModel } from '@prisma/client';
import { Note } from '../entities/Note/Note';
import { NoteRequestData, UserNoteQuery } from '../@types/DTOs/NoteDTO';
import { INoteRepository } from '../@types/repositories/INoteRepository';
import { prisma } from '../lib/prisma';

export class NoteRepository implements INoteRepository {
  async deleteNote (id: string) {
    await prisma.note.delete({ where: { id } });
  }

  async createNote (noteData : NoteRequestData) {
    const note = await prisma.note.create({
      data: {
        subject: noteData.subject,
        content: noteData.content,
        userId: noteData.userId
      }
    });
    return this.noteMapper(note);
  }

  async updateNote (id: string, noteData: NoteRequestData) {
    const updatedNote = await prisma.note.update({
      data: {
        subject: noteData.subject,
        content: noteData.content,
        userId: noteData.userId
      },
      where: { id }
    });

    return this.noteMapper(updatedNote);
  }

  async findAllUserNotes (userId: string) {
    const notes = await prisma.note.findMany({
      where: { userId }
    });

    return notes.map((note) => this.noteMapper(note));
  }

  async findOneUserNotes ({ id, userId, content, subject }: UserNoteQuery) {
    const note = await prisma.note.findFirst({
      where: {
        id,
        userId,
        content: {
          contains: content
        },
        subject: {
          contains: subject
        }
      }
    });

    if (!note) return null;

    return this.noteMapper(note);
  }

  private noteMapper (note: NoteModel) {
    const { id, content, subject, userId, user } = new Note(note);
    return { id, content, subject, userId, user } as Note;
  }
}
