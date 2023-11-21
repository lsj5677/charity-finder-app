import { useLocation } from "react-router-dom";
import { CharityCard } from "../components/CharityCard";
import { CharityType } from "../types/charity.types";

export const SearchResults = () => {
  const {
    state: { res, keyword, tag, e },
  } = useLocation();

  const charities = res.nonprofits;

  console.log("1", typeof keyword);
  console.log("2", typeof e);
  console.log("3", keyword);
  console.log("4", e);

  return (
    <div className="sub-wrap ">
      <h3 className="mb-6 text-center text-2xl font-semibold">
        Search results for:{" "}
        <span className="text-pointNavy">{keyword || tag || e}</span>
      </h3>
      {charities.length === 0 ? (
        <div className="w-full text-center">
          <span>No result</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-2 gap-y-4 sm:grid-cols-2 md:grid-cols-3">
          {charities?.map((charity: CharityType) => (
            <CharityCard key={charity.logoUrl} charity={charity} />
          ))}
        </div>
      )}
    </div>
  );
};
