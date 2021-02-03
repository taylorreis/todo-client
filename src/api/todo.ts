import { Todo, TodoPartial } from "../model/Todo";
import { getJson, URLBuilder, createJsonHeaders } from "./utils";

const TODO_API_BASE_URL = "http://localhost:3000/todos";

const urlBuilder = new URLBuilder(TODO_API_BASE_URL);

export const getAll = () => fetch(urlBuilder.build()).then(getJson);
export const get = (id: string) => fetch(urlBuilder.build(id)).then(getJson);
export const create = (body: TodoPartial) =>
  fetch(urlBuilder.build(), {
    method: "POST",
    headers: createJsonHeaders(),
    body: JSON.stringify(body),
  }).then(getJson);
export const update = (todo: Todo) =>
  fetch(urlBuilder.build(todo.id), {
    method: "PUT",
    headers: createJsonHeaders(),
    body: JSON.stringify(todo),
  }).then(getJson);
export const remove = (id: string) =>
  fetch(urlBuilder.build(id), {
    method: "DELETE",
  }).then(getJson);
