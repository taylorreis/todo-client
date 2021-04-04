import { AUTH, BASE_HOST, LOGIN } from "./constants";
import { HeadersBuilder, getJson, URLBuilder } from "./utils";

const AUTH_LOGIN = `${AUTH}/${LOGIN}`;

export const login = (username: string, password: string) =>
  fetch(URLBuilder.init(BASE_HOST, AUTH_LOGIN).build(), {
    method: "POST",
    headers: HeadersBuilder.init().addJson().headers,
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(
          `Failed to login. Got status code: ${res.status} and message: "${res.statusText}"`
        );
      }
      return res;
    })
    .then(getJson)
    .then((res) => {
      if (res.access_token == null) {
        throw new Error("No access token returned.");
      }
      return res;
    });
