interface DashBoardPageWrapperProps {
  pageTitle: string;
  children: React.ReactNode;
}

export const DashBoardPageWrapper: React.FC<DashBoardPageWrapperProps> = ({
  pageTitle,
  children,
}) => {
  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">{pageTitle}</h1>
      </div>
      <div className="flex-1 min-h-0 rounded-lg border border-dashed shadow-sm">
        {children}
      </div>
    </div>
  );
};
