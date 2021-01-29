export interface TodoPartial {
  description: string;
}

export interface Todo extends TodoPartial {
  id: string;
  createdAt: string;
  updatedAt: string;
}
