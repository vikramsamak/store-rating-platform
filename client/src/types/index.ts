import type { AxiosRequestConfig, Method } from "axios";

export interface ApiRequestOptions {
  url: string;
  method?: Method;
  headers?: Record<string, string>;
  params?: Record<string, unknown>;
  data?: unknown;
  baseURL?: string;
  timeout?: number;
  responseType?: AxiosRequestConfig["responseType"];
  returnFullResponse?: boolean;
}
