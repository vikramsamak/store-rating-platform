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
  withCredentials?: boolean;
}

export type SuccessApiResponse = {
  success: boolean;
  message: string;
  data?: unknown;
};

export type BaseFormField = {
  label: string;
  component: React.ElementType;
  props?: Record<string, unknown>;
  description?: string;
};

export type User = {
  id: string;
  name: string;
  address: string;
  email: string;
  role: string;
};

export type Stat = {
  label: string;
  value: string | number;
};

export type GenericSelectOption = {
  label: string;
  value: string;
};
