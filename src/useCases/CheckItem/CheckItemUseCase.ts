import { IChecklistRepository } from '../../@types/repositories/IChecklistRepository';

export class CheckItemUseCase {
  constructor (private checklistRepository: IChecklistRepository) {}

  async execute (id: string, userId: string) {
    await this.checklistRepository.checkItem({ id, userId });
  }
}
