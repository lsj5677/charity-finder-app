import { useState } from "react";
import { CharityType } from "../types/charity.types";
import { readCharitesFromLocalStorage } from "./CharityDetail";
import { CharityCard } from "../components/CharityCard";

export const Favorites = () => {
  const [charities, setCharities] = useState<CharityType[]>(
    readCharitesFromLocalStorage(),
  );

  return (
    <div className="sub-wrap grid grid-cols-1 gap-2 gap-y-4 sm:grid-cols-2 md:grid-cols-3">
      {charities?.map((charity: CharityType) => (
        <CharityCard key={charity.name} charity={charity} />
      ))}
    </div>
  );
};
