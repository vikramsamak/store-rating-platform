import { Alert, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted p-4">
      <Alert className="max-w-md w-full shadow-lg" variant="destructive">
        <Terminal className="h-5 w-5" />
        <AlertTitle className="text-lg">Something went wrong</AlertTitle>
      </Alert>
    </div>
  );
};
