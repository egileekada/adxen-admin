const AccountStat = ({ name, value }: { name: string; value: number }) => {
  return (
    <div className="flex flex-1 flex-col p-6 gap-4 border-b md:border-b-0 last:border-b-0 md:border-r border-border-darker md:last:border-r-0">
      <p className="text-muted text-xs">{name}</p>
      <p className="text-2xl font-inter font-medium">{value}</p>
    </div>
  );
};

export default AccountStat;
