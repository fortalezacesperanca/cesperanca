import axios, { type AxiosInstance } from "axios";

export class HttpAdapter {
  private client: AxiosInstance;
  constructor() {
    this.client = axios.create({
      // baseURL: `${Env.getEnv().API_HOST}/cards`,
      withCredentials: true,
    });
  }
  get(url: string) {
    this.client.get(url);
  }
}
