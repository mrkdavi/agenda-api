import NotFound from '../../@types/errors/NotFound';
import { IChecklistRepository } from '../../@types/repositories/IChecklistRepository';

export class GetOneChecklistUseCase {
  constructor (private checklistRepository: IChecklistRepository) {}

  async execute (checklistId: string, userId: string) {
    const checklist = await this.checklistRepository.findOneUserChecklist({ checklistId, userId });

    if (!checklist) throw new NotFound('User has no checklist with this id!');

    return checklist;
  }
}
