import type { User as Usertype } from "@/types";
import GenericTable from "../Generics/GenericTable";
import { TableCell, TableRow } from "../ui/table";
import ErrorDisplay from "../Generics/ErrorDisplay";
import { Skeleton } from "../ui/skeleton";
import { User } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/use-auth";
import { useMemo } from "react";

interface UserTableProps {
  searchQuery: string;
}

export const UserTable: React.FC<UserTableProps> = ({ searchQuery }) => {
  const { authUser } = useAuth();

  const getUsers = async () => {
    try {
      const response = await User.get();
      return response.data as Usertype[];
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Something went wrong.";
      throw new Error(errorMessage);
    }
  };

  const {
    data: users,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["USER", "UPDATE_ON_USER", authUser?.id],
    queryFn: getUsers,
  });

  const filteredUsers = useMemo(() => {
    if (!searchQuery) return users;

    const query = searchQuery.toLowerCase();

    return users?.filter((user) =>
      [user.name, user.email, user.address, user.role].some((field) =>
        field.toLowerCase().includes(query)
      )
    );
  }, [users, searchQuery]);

  if (isLoading) {
    return <Skeleton className="h-full w-full" />;
  }

  if (isError) {
    return <ErrorDisplay errorMessage={error.message} />;
  }

  return (
    <GenericTable
      tableHeaders={["Name", "Email", "Address", "Role", "Rating"]}
      data={filteredUsers ?? []}
      renderRow={(user: Usertype, i) => (
        <TableRow key={i}>
          <TableCell>{user.name}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.address}</TableCell>
          <TableCell className="capitalize">
            {user.role.toLowerCase().replace("_", " ")}
          </TableCell>
          <TableCell>
            {user.role === "STORE_OWNER"
              ? user.storeRating?.toFixed(2) ?? "0.00"
              : "—"}
          </TableCell>
        </TableRow>
      )}
    />
  );
};
