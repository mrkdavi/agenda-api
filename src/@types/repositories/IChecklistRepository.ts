import { Checklist } from '../../entities/Checklist/Checklist';
import {
  AllChecklistsResponse,
  getOneChecklistQuery,
  createChecklistRequest,
  checkItemRequest
} from '../DTOs/ChecklistDTO';

export interface IChecklistRepository {
  findAllUserChecklist(userId: string): Promise<AllChecklistsResponse[]>;
  findOneUserChecklist(query: getOneChecklistQuery): Promise<Checklist | null>;
  createChecklist(noteRequestData: createChecklistRequest): Promise<Checklist>;
  checkItem(checkData: checkItemRequest): Promise<void>;
}
