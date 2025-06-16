import { DashBoardPageWrapper } from "@/components/Dashboard/DashBoardPageWrapper";
import { Stats } from "@/components/Dashboard/Stats";

export const DashboardHome = () => {
  return (
    <DashBoardPageWrapper pageTitle="Home">
      <Stats />
    </DashBoardPageWrapper>
  );
};
