import { ApiService } from "./apiService";
import { AuthService } from "./authService";

export const User = new ApiService("/user");

export const Store = new ApiService("/store");

export const Rating = new ApiService("/rating");

export const Auth = new AuthService("/auth");
