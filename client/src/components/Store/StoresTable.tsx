import GenericTable from "../Generics/GenericTable";
import { TableCell, TableRow } from "../ui/table";
import ErrorDisplay from "../Generics/ErrorDisplay";
import { Skeleton } from "../ui/skeleton";
import { Store } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/use-auth";
import type { Store as StoreType } from "@/types";
import type React from "react";
import { useMemo } from "react";

interface StoresTableProps {
  searchQuery: string;
}

export const StoresTable: React.FC<StoresTableProps> = ({ searchQuery }) => {
  const { authUser } = useAuth();

  const getStores = async () => {
    try {
      const response = await Store.get();
      return response.data as StoreType[];
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Something went wrong.";
      throw new Error(errorMessage);
    }
  };

  const {
    data: stores,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["STORE", "UPDATE_ON_STORE", authUser?.id],
    queryFn: getStores,
  });

  const filteredStores = useMemo(() => {
    if (!searchQuery) return stores;

    const query = searchQuery.toLowerCase();

    return stores?.filter((store) =>
      [store.name, store.email, store.address].some((field) =>
        field.toLowerCase().includes(query)
      )
    );
  }, [stores, searchQuery]);

  if (isLoading) {
    return <Skeleton className="h-full w-full" />;
  }

  if (isError) {
    return <ErrorDisplay errorMessage={error.message} />;
  }

  return (
    <GenericTable
      tableHeaders={["Name", "Email", "Address", "Rating"]}
      data={filteredStores ?? []}
      renderRow={(store: StoreType, i) => (
        <TableRow key={i}>
          <TableCell>{store.name}</TableCell>
          <TableCell>{store.email}</TableCell>
          <TableCell>{store.address}</TableCell>
          <TableCell>{store.averageRating}</TableCell>
        </TableRow>
      )}
    />
  );
};
