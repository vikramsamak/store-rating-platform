import type { User as Usertype } from "@/types";
import GenericTable from "../Generics/GenericTable";
import { TableCell, TableRow } from "../ui/table";
import ErrorDisplay from "../Generics/ErrorDisplay";
import { Skeleton } from "../ui/skeleton";
import { User } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/use-auth";

export const UserTable = () => {
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
    queryKey: ["USER", "UPDATE_ON_USERS", authUser?.id],
    queryFn: getUsers,
  });

  if (isLoading) {
    return <Skeleton className="h-full w-full" />;
  }

  if (isError) {
    return <ErrorDisplay errorMessage={error.message} />;
  }

  return (
    <GenericTable
      tableHeaders={["Name", "Email", "Address", "Role"]}
      data={users ?? []}
      renderRow={(user: Usertype, i) => (
        <TableRow key={i}>
          <TableCell>{user.name}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.address}</TableCell>
          <TableCell>{user.role}</TableCell>
        </TableRow>
      )}
    />
  );
};
