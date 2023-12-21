import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { userApi, UserProfile } from "@/api";

type UseProfileQueryOtions = Omit<
  UseQueryOptions<UserProfile>,
  "queryKey" | "queryFn"
>;

export const useProfile = (options?: UseProfileQueryOtions) => {
  return useQuery({
    ...options,
    queryKey: ["profile"],
    queryFn: userApi.getProfile,
  });
};
