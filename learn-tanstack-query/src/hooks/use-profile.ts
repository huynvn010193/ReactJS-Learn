import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { userApi, UserProfile } from "@/api";

// bỏ ra 2 thuộc tính "queryKey" | "queryFn".
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
