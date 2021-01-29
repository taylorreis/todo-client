export class URLBuilder {
  constructor(private baseUrl: string) {}

  build(params?: string): string {
    return `${this.baseUrl}${params != null ? `/${params}` : ""}`;
  }
}

export const getJson = (res: Response) => res.json();

export const createJsonHeaders = (): Headers => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  return headers;
};
