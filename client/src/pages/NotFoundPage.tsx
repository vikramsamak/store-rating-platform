import { DashBoardPageWrapper } from "@/components/Dashboard/DashBoardPageWrapper";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export const NotFoundPage = () => {
  return (
    <DashBoardPageWrapper className="flex w-full h-full justify-center items-center">
      <Alert className="max-w-md w-full shadow-lg" variant="destructive">
        <Terminal className="h-5 w-5" />
        <AlertTitle className="text-lg">Page Not Found</AlertTitle>
      </Alert>
    </DashBoardPageWrapper>
  );
};
