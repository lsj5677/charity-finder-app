import { useNavigate } from "react-router-dom";
import { CharityType } from "../types/charity.types";
import { IoLocationSharp } from "react-icons/io5";

type CharityCardType = {
  charity: CharityType;
  key: string;
};
export const CharityCard = (charity: CharityCardType) => {
  const navigate = useNavigate();
  const { logoUrl, name, description, location } = charity.charity;

  return (
    <article
      onClick={() => {
        navigate(`/charities/details/${name}`, {
          state: { charity },
        });
      }}
      className={`bg-mainBeige hover:bg-pointBeige group cursor-pointer rounded-md px-6 py-5 shadow-md transition ease-in-out hover:transition-all`}
    >
      <div className="bg-mainGray text-mainBeige flex w-fit items-center gap-2 truncate rounded-sm px-1 text-xs">
        <IoLocationSharp />
        <span className="truncate">
          {location ? location.split(",", 2).join(",") : "N / A"}
        </span>
      </div>
      <div className="border-mainGray my-3 flex items-center gap-3 border-b pb-3">
        {logoUrl ? (
          <img src={logoUrl} alt={name} className="rounded-full" />
        ) : (
          <span className="bg-mainGray h-[48px] w-[48px] rounded-full" />
        )}
        <h4 className="font-semibold">{name}</h4>
      </div>
      <p className="truncate text-sm">{description}</p>
    </article>
  );
};
