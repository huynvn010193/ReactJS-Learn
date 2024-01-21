import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { tnxApi, Transaction } from "@/api";
import { QueryKeys } from "@/constants";

type UseTnxDetailOptions = Omit<
  UseQueryOptions<Transaction>,
  "queryKey" | "queryFn"
>;

export const useTnxDetails = (tnxId: string, options?: UseTnxDetailOptions) => {
  return useQuery({
    ...options,
    queryKey: [QueryKeys.TNX_DETAILS, tnxId],
    queryFn: () => tnxApi.getDetails(tnxId!),
    enabled: !!tnxId,
    refetchInterval: (query) => {
      const currentStatus = query.state?.data?.status || "pending";
      if (["completed", "cancelled", "failed"].includes(currentStatus)) {
        return false;
      }
      return 3000; // 3 seconds. Nếu khác các status trên thì cứ 3s fetch 1 lần
      //http://localhost:5173/txn-details?tnxId=aqbbx1vj1lqrtv3zz
    },
  });
};
