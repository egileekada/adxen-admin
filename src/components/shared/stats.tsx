type StatsProps = {
  name: string;
  value: number | string;
  icon?: React.ReactNode;
  hasIcon?: boolean;
};

const Stats = ({ name, value, icon, hasIcon = false }: StatsProps) => {
  return (
    <div className="w-full h-full flex flex-1 flex-col p-6 not-last:border-b md:nth-[1]:border-b-0 md:nth-[2]:border-b-0 md:not-last:border-r">
      <div>
        {hasIcon && icon && (
          <div className="flex items-center gap-2">{icon}</div>
        )}
        <p className="text-muted text-xs">{name}</p>
      </div>
      <p className="text-2xl font-inter font-medium">{value}</p>
    </div>
  );
};

export default Stats;
