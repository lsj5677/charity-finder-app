import { useNavigate } from "react-router-dom";
import { CharityType } from "../types/charity.types";
import { IoLocationSharp } from "react-icons/io5";

type CharityCardProps = {
  charity: CharityType;
  key: string;
};
export const CharityCard = (charity: CharityCardProps) => {
  const navigate = useNavigate();
  console.log("charity ::", charity);
  const { logoUrl, name, websiteUrl, description, location } = charity.charity;

  return (
    <article
      onClick={() => {
        navigate(`/charities/details/${name}`, {
          state: { charity },
        });
      }}
      className={`bg-mainBeige hover:bg-pointBeige group cursor-pointer rounded-md px-6 py-5 shadow-md transition ease-in-out hover:transition-all ${
        !websiteUrl && "hover:bg-mainGray"
      }`}
    >
      <div className="bg-mainGray text-mainBeige flex w-fit items-center gap-2 truncate rounded-sm px-1 text-xs">
        <IoLocationSharp />
        <span>{location ? location : "N / A"}</span>
      </div>
      <div className="border-mainGray my-3 flex items-center gap-3 border-b pb-3">
        <img src={logoUrl} alt={name} className="rounded-full" />
        <h4 className="font-semibold">{name}</h4>
      </div>
      <p className="truncate text-sm">{description}</p>
    </article>
  );
};
