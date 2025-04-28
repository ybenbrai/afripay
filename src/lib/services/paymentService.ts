import axios from "axios";
import { authStorage } from "./authStorage"; // import the token storage

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export const paymentService = {
  createTransaction: (data: {
    service: string;
    account: string;
    amount: string;
    date: string;
    user: number;
  }) => {
    const token = authStorage.getToken();

    return axios.post(
      `${API_URL}/transactions`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
  getTransactions: (userId: number) => {
    const token = authStorage.getToken();

    return axios.get(
      `${API_URL}/transactions?filters[user][id][$eq]=${userId}&sort[0]=date:desc`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
};
