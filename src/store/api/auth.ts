import { useMutation } from "@tanstack/react-query";
import api from "../axios";

// Login mutation
export const useLogin = () => {
  return useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const response = await api.post("/v1/auth/login", data);
      return response.data;
    },
    onSuccess: (data) => {
      if (data?.tokens) {
        localStorage.setItem("token", data.tokens?.refresh?.token);
        window.location.href = "/dashboard";
      }
    },
  });
};

// Register mutation
export const useRegister = () => {
  return useMutation({
    mutationFn: async (data: { name: string; email: string; password: string }) => {
      const response = await api.post("/v1/auth/register", data);
      return response.data;
    },
    onSuccess: (data) => {
      if (data?.tokens) {
        localStorage.setItem("token", data.tokens?.refresh?.token);
        window.location.href = "/dashboard";
      }
    },
  });
};