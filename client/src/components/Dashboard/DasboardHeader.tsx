import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "../ui/sidebar";
import { useLocation } from "react-router-dom";

export const DasboardHeader = () => {
  const currentPage = useLocation();

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 sticky top-0 z-10">
      <SidebarTrigger className="-ml-1" />
      <Separator
        orientation="vertical"
        className="mr-2 data-[orientation=vertical]:h-4"
      />
      <p className="capitalize">{currentPage.pathname.replace("/", "")}</p>
    </header>
  );
};
