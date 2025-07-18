import { Button } from "../ui/button";

type IHeaderDescription = {
  title: string;
  description: string;
  handleRequestAdAccount: () => void;
};

const HeaderDescription = ({
  title,
  description,
  handleRequestAdAccount,
}: IHeaderDescription) => {
  return (
    <div className="flex items-end justify-between gap-1.5">
      <div className="flex flex-col gap-1.5">
        <h1 className="text-2xl font-inter font-medium">{title}</h1>
        <p className="text-sm text-muted text-balance">{description}</p>
      </div>
      <Button
        className="hidden sm:block cursor-pointer text-sm font-medium"
        onClick={handleRequestAdAccount}
      >
        Request Ad Account
      </Button>
    </div>
  );
};

export default HeaderDescription;
