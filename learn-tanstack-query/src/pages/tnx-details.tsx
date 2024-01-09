import React from "react";
import { useTnxDetails } from "@/hooks/use-tnx-detail";
import { useSearchParams } from "react-router-dom";

const TnxDetails: React.FC = () => {
  const [searchParams] = useSearchParams();
  const tbxId = searchParams.get("tnxId");
  console.log("🚀 ~ file: tnx-details.tsx:8 ~ tbxId:", tbxId);
  const { data: tnxDetails, isLoading, isError } = useTnxDetails(tbxId || "");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !tnxDetails) {
    return <div>Error fetching transaction details</div>;
  }

  return (
    <div>
      {/* Render the data to the UI */}
      <h1>Transaction Details</h1>
      <p>Transaction ID: {tnxDetails.id}</p>
      <p>Status: {tnxDetails.status}</p>
      <p>Amount: {tnxDetails.amount}</p>
    </div>
  );
};

export default TnxDetails;
