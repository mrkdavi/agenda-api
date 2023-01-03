import { IChecklistRepository } from '../../@types/repositories/IChecklistRepository';

export class GetAllUserChecklistsUseCase {
  constructor (private checklistRepository: IChecklistRepository) {}

  async execute (userId: string) {
    return this.checklistRepository.findAllUserChecklist(userId);
  }
}
