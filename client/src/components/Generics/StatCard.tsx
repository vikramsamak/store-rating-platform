interface StatCardProps {
  label: string;
  value: string | number;
}

const StatCard: React.FC<StatCardProps> = ({ label, value }) => {
  return (
    <div className="flex flex-col w-full h-full gap-2 bg-muted rounded-md p-2 shadow-md">
      <p className="text-base font-thin">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default StatCard;
