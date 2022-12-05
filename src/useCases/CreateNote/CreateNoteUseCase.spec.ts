import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Note } from '../../entities/Note/Note';
import { CreateNoteUseCase } from './CreateNoteUseCase';
import { NoteMock, noteRequestMock } from '../../mocks/noteMocks';
import { INoteRepository } from '../../@types/repositories/INoteRepository';

describe('CreateNoteUseCase', () => {
  const noteRepository = {} as INoteRepository;
  const createNoteUseCase = new CreateNoteUseCase(noteRepository);
  const note = new Note(NoteMock);

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should respond with Note object', () => {
    noteRepository.createNote = vi.fn().mockResolvedValueOnce(note);

    const response = createNoteUseCase.execute(noteRequestMock);

    expect(response).resolves.toEqual(expect.objectContaining(note));
  });
});
