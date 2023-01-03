import { MapperChecklistToPrisma } from '../../@types/DTOs/ChecklistDTO';
import { Checklist as RawChecklist, ChecklistItem as RawChecklistItem } from '@prisma/client';
import { ChecklistItem } from '../../entities/ChecklistItem/ChecklistItem';
import { Checklist } from '../../entities/Checklist/Checklist';

export class ChecklistMapper {
  static toPrisma (checklist: Checklist): MapperChecklistToPrisma {
    return {
      name: checklist.name,
      items: checklist.items.map(item => ({ name: item.name, checked: item.checked })),
      userId: checklist.userId
    };
  }

  static toDomain (raw: RawChecklist & { items: RawChecklistItem[] }) {
    return new Checklist({
      id: raw.id,
      name: raw.name,
      userId: raw.userId,
      items: raw.items.map(item => new ChecklistItem({
        id: item.id,
        name: item.name,
        checked: item.checked
      }))
    });
  }
}
