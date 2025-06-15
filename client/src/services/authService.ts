import { apiRequest } from "@/utils";
import { ApiService } from "./apiService";

export class AuthService extends ApiService {
  constructor(endpoint: string) {
    super(endpoint);
  }

  async signIn(data: Record<string, unknown>): Promise<unknown> {
    return apiRequest({
      url: `${this.endpoint}/signin`,
      method: "POST",
      data,
    });
  }

  async signUp(data: Record<string, unknown>): Promise<unknown> {
    return apiRequest({
      url: `${this.endpoint}/signup`,
      method: "POST",
      data,
    });
  }

  async signOut(): Promise<unknown> {
    return apiRequest({
      url: `${this.endpoint}/signout`,
      method: "POST",
    });
  }
}
