import { createChecklistRequest } from '../../@types/DTOs/ChecklistDTO';
import { IChecklistRepository } from '../../@types/repositories/IChecklistRepository';

export class CreateChecklistUseCase {
  constructor (private checklistRepository: IChecklistRepository) {}

  async execute ({ name, items, userId }: createChecklistRequest) {
    return this.checklistRepository.createChecklist({
      name,
      userId,
      items
    });
  }
}
