import axios from "axios";
import type { ApiRequestOptions } from "../types";
import { envConfig } from "../configs";

export async function apiRequest(options: ApiRequestOptions): Promise<unknown> {
  const {
    url,
    method = "GET",
    headers = {},
    params,
    data,
    baseURL = envConfig.API_BASE_URL,
    timeout = 10000,
    responseType = "json",
  } = options;

  try {
    const response = await axios.request({
      url,
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      params,
      data,
      baseURL,
      timeout,
      responseType,
    });

    return response.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      const errorMessage = err.response?.data?.error || "Something went wrong.";

      throw new Error(errorMessage);
    } else {
      // Handle other types of errors
      throw new Error(`Unexpected error: ${err}`);
    }
  }
}
