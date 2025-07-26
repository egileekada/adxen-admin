const AccountStat = ({ name, value }: { name: string; value: number }) => {
  return (
<<<<<<< HEAD
    <div className="flex flex-1 flex-col p-6 gap-4 border-b md:border-b-0 last:border-b-0 md:border-r border-border-darker md:last:border-r-0">
=======
    <div className="flex flex-1 flex-col p-6 gap-4 border-r-0 border-b border-default md:border-r">
>>>>>>> d2698d3 (made update on request sidebar(click request add account to view))
      <p className="text-muted text-xs">{name}</p>
      <p className="text-2xl font-inter font-medium">{value}</p>
    </div>
  );
};

export default AccountStat;
