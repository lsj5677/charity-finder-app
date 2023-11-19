import { useEffect, useState } from "react";
import { CharityType } from "../types/charity.types";
import { getCharities } from "../api/CharityApi";
import { CharityCard } from "../components/CharityCard";

export const Charities = () => {
  const [charities, setCharities] = useState<CharityType[]>();
  const [loading, setLoading] = useState<boolean>(false);

  // random causes -> param
  const getCharitiesData = async () => {
    setLoading(true);
    await getCharities() //
      .then((res) => {
        const charities = res.nonprofits;
        setCharities(charities);

        setLoading(false);
      })
      .catch((err) => console.log(`err :: ${err}`));
  };

  useEffect(() => {
    getCharitiesData();
  }, []);

  return (
    <>
      {loading && (
        <div className="sub-wrap">
          <span>Loading...</span>
        </div>
      )}
      <div className="sub-wrap grid grid-cols-1 gap-2 gap-y-4 sm:grid-cols-2 md:grid-cols-3">
        {charities?.map((charity: CharityType) => (
          <CharityCard key={charity.logoCloudinaryId} charity={charity} />
        ))}
      </div>
    </>
  );
};
