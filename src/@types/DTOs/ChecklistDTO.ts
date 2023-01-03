export interface AllChecklistsResponse {
  id: string;
  name: string;
}

export interface getOneChecklistQuery {
  checklistId: string;
  userId: string;
}

export interface createChecklistRequest {
  name: string;
  userId: string;
  items: { name: string }[];
}

export interface checkItemRequest {
  id: string;
  userId: string;
}

export interface MapperChecklistToPrisma {
  name: string;
  userId: string;
  items: { name: string, checked: boolean }[];
}
