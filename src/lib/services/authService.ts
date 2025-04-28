// src/lib/services/authService.ts
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export const authService = {
  register: (email: string, password: string) =>
    axios.post(`${API_URL}/auth/local/register`, {
      username: email,
      email,
      password,
    }),

  login: (email: string, password: string) =>
    axios.post(`${API_URL}/auth/local`, {
      identifier: email,
      password,
    }),
};
