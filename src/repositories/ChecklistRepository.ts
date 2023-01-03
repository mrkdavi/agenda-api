import { AllChecklistsResponse, getOneChecklistQuery, createChecklistRequest, checkItemRequest } from '../@types/DTOs/ChecklistDTO';
import NotFound from '../@types/errors/NotFound';
import { IChecklistRepository } from '../@types/repositories/IChecklistRepository';
import { Checklist } from '../entities/Checklist/Checklist';
import { ChecklistItem } from '../entities/ChecklistItem/ChecklistItem';
import { prisma } from '../lib/prisma';
import { ChecklistMapper } from './mappers/ChecklistMapper';

export class ChecklistRepository implements IChecklistRepository {
  async findAllUserChecklist (userId: string): Promise<AllChecklistsResponse[]> {
    return prisma.checklist.findMany({
      where: {
        userId
      },
      select: {
        id: true,
        name: true
      }
    });
  }

  async findOneUserChecklist ({ userId, checklistId: id }: getOneChecklistQuery): Promise<Checklist | null> {
    const checklist = await prisma.checklist.findFirst({
      where: {
        id,
        userId
      },
      include: {
        items: true
      }
    });

    if (!checklist) return null;

    return ChecklistMapper.toDomain(checklist);
  }

  async createChecklist ({ items: itemsData, ...checklistData }: createChecklistRequest): Promise<Checklist> {
    const items = itemsData.map(({ name }) => new ChecklistItem({ name, checked: false }));
    const checklist = new Checklist({ ...checklistData, items });
    const rawChecklist = ChecklistMapper.toPrisma(checklist);

    await prisma.checklist.create({
      data: {
        name: rawChecklist.name,
        userId: rawChecklist.userId,
        items: {
          create: rawChecklist.items
        }
      }
    });

    return checklist;
  }

  async checkItem ({ id, userId }: checkItemRequest): Promise<void> {
    const item = await prisma.checklistItem.findFirst({
      where: { id, checklist: { userId } }
    });

    if (!item) throw new NotFound('Item not found');

    prisma.checklistItem.update({
      data: { checked: !item.checked },
      where: { id }
    });
  }
}
