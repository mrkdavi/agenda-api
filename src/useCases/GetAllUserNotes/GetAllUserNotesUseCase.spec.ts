import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Note } from '../../entities/Note/Note';
import { GetAllUserNotesUseCase } from './GetAllUserNotesUseCase';
import { NoteMock, userNotesMock } from '../../mocks/noteMocks';
import { INoteRepository } from '../../@types/repositories/INoteRepository';

describe('GetAllUserNotesUseCase', () => {
  const noteRepository = {} as INoteRepository;
  const getAllUserNotesUseCase = new GetAllUserNotesUseCase(noteRepository);
  const note = new Note(NoteMock);

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should respond with all user Note objects', () => {
    noteRepository.findAllUserNotes = vi.fn().mockResolvedValueOnce(userNotesMock);
    const response = getAllUserNotesUseCase.execute(note.userId);
    expect(response).resolves.toEqual(expect.objectContaining(userNotesMock));
  });
});
