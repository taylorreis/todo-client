import { Todo, TodoPartial } from "../model/Todo";

import { BASE_HOST, TODOS } from "./constants";
import {
  getJson,
  HeadersBuilder,
  URLBuilder,
} from "./utils";

export const getAll = (token: string) =>
  fetch(URLBuilder.init(BASE_HOST, TODOS).build(), {
    headers: HeadersBuilder.init().addAuthorization(token).headers,
  }).then(getJson);
export const get = (token: string, id: string) =>
  fetch(URLBuilder.init(BASE_HOST, `${TODOS}/${id}`).build(), {
    headers: HeadersBuilder.init().addAuthorization(token).headers,
  }).then(getJson);
export const create = (token: string, body: TodoPartial) =>
  fetch(URLBuilder.init(BASE_HOST, TODOS).build(), {
    method: "POST",
    headers: HeadersBuilder.init().addJson().addAuthorization(token).headers,
    body: JSON.stringify(body),
  }).then(getJson);
export const update = (token: string, todo: Todo) =>
  fetch(URLBuilder.init(BASE_HOST, `${TODOS}/${todo.id}`).build(), {
    method: "PUT",
    headers: HeadersBuilder.init().addJson().addAuthorization(token).headers,
    body: JSON.stringify(todo),
  }).then(getJson);
export const remove = (token: string, id: string) =>
  fetch(URLBuilder.init(BASE_HOST, `${TODOS}/${id}`).build(), {
    method: "DELETE",
    headers: HeadersBuilder.init().addAuthorization(token).headers,
  }).then(getJson);
