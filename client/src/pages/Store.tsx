import { DashBoardPageWrapper } from "@/components/Dashboard/DashBoardPageWrapper";
import { GenericCard } from "@/components/Generics/GenericCard";
import { GenericModal } from "@/components/Generics/GenericModal";
import { CreateNewStoreForm } from "@/components/Store/CreateNewStoreForm";
import { StoresTable } from "@/components/Store/StoresTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/use-auth";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export const Store = () => {
  const { authUser } = useAuth();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isStoreModalOpen, setStoreModalOpen] = useState<boolean>(false);

  if (authUser && authUser?.role !== "SYSTEM_ADMIN") {
    return <Navigate to={"/dashboard/acessdenied"} />;
  }

  return (
    <DashBoardPageWrapper pageTitle="Store">
      <GenericCard
        cardContent={
          <div className="flex flex-col gap-2">
            <div className="flex  w-full gap-2">
              <Input
                className="w-4/5 p-2"
                placeholder="Serach stores"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button className="w-1/5" onClick={() => setStoreModalOpen(true)}>
                Add Store
              </Button>
            </div>
            <StoresTable searchQuery={searchQuery} />
          </div>
        }
        className="h-full"
      />
      {isStoreModalOpen && (
        <GenericModal
          isModalOpen={isStoreModalOpen}
          modalContent={
            <CreateNewStoreForm
              closeUserModal={() => setStoreModalOpen(false)}
            />
          }
          modalTitle="Add New Store"
          onOpenChange={(isOpen: boolean) => setStoreModalOpen(isOpen)}
          modalDesc="Fill the below details to add new store"
        />
      )}
    </DashBoardPageWrapper>
  );
};
