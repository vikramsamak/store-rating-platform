import { DasboardHeader } from "@/components/Dashboard/DasboardHeader";
import { DashBoardPageWrapper } from "@/components/Dashboard/DashBoardPageWrapper";
import { DashboardSidebar } from "@/components/Dashboard/DashboardSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset className="flex flex-col h-screen">
        <DasboardHeader />
        <div className="flex flex-1 flex-col gap-4 p-4 min-h-0">
          <DashBoardPageWrapper pageTitle={"Hello"}>
            <p>hello</p>
          </DashBoardPageWrapper>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};
