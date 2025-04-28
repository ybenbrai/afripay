// src/lib/services/authStorage.ts

export const authStorage = {
  setToken: (token: string) => {
    localStorage.setItem("token", token);
  },
  getToken: () => {
    return localStorage.getItem("token");
  },
  clearToken: () => {
    localStorage.removeItem("token");
  },
};
