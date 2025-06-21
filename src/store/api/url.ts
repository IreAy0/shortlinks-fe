import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../axios";

export const useShortenUrl = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data ) => {
      try {
        const response = await api.post(
          `/v1/url/shorten`,
          data,
        );
        return response.data;
      } catch (error) {
        return error;
      }
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['shortened-url'], data);
    },
  });
};

export const useUnlockLink = () => {
  const queryClient = useQueryClient();
   return useMutation({
    mutationFn: async (data) => {
      try {
        const response = await api.post(
          `/v1/url/verify/${data?.shortUrl}`,
         {password: data?.password},
        );
        return response.data;
      } catch (error) {
        return error;
      }
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['unlock-link'], data);
    },
  });
}

export const useGetUrls = () => {
  return useQuery({
    queryKey: ["urls"],
    queryFn: async () => {
      const { data } = await api.get("/v1/url/all")
      return data
    },
  })
}
