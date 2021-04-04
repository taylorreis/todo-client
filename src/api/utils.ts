export class URLBuilder {
  private readonly url: URL;

  private constructor(path: string, baseUrl: string, ) {
    this.url = new URL(path, baseUrl);
  }

  static init(baseUrl: string, path: string = ''): URLBuilder {
    return new URLBuilder(path, baseUrl);
  }

  addIdParam(id: string) {
    return this.addParam('id', id);
  }

  addParam(name: string, value: string) {
    const { searchParams } = this.url;
    searchParams.append(name, value);
    return this;
  }

  build(): string {
    return this.url.toString();
  }
}

export const getJson = (res: Response) => res.json();

export class HeadersBuilder {
  private _headers: Headers;
  
  private constructor() {
    this._headers = new Headers();
  }

  static init(): HeadersBuilder {
    return new HeadersBuilder();
  }

  addJson() {
    this._headers.append("Content-Type", "application/json")
    return this;
  }

  addAuthorization(token: string) {
    this._headers.append("Authorization", `Bearer ${token}`);
    return this;
  }

  get headers() {
    return this._headers;
  }
}
