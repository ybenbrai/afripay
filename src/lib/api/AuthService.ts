import { httpClient } from "../httpClient";
import type { LoginPayload, RegisterPayload } from "@/types/auth";

export const authService = {
  login: (data: LoginPayload) => httpClient.post("/auth/login", data),
  register: (data: RegisterPayload) => httpClient.post("/auth/register", data),
};
