const Stats = ({ name, value }: { name: string; value: number | string }) => {
  return (
    <div className="flex flex-1 w-full flex-col p-6 gap-4 last:border-b-0 border-border md:border-r md:last:border-r-0 border-b md:border-b-0">
      <p className="text-muted text-xs">{name}</p>
      <p className="text-2xl font-inter font-medium">{value}</p>
    </div>
  );
};

export default Stats;
