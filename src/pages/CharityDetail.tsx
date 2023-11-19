import { IoLocationSharp } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { searchCharities } from "../api/CharityApi";
import { useEffect, useState } from "react";
import { CharityType } from "../types/charity.types";

export const CharityDetail = () => {
  const {
    state: { charity },
  } = useLocation();

  const [success, setSuccess] = useState<string>("");
  const [save, setSave] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<CharityType[]>(
    readCharitesFromLocalStorage,
  );

  const navigate = useNavigate();
  const charityData = charity.charity;
  const {
    logoUrl,
    name,
    profileUrl,
    description,
    location,
    tags,
    coverImageUrl,
  } = charityData;

  const handleSearch = async (tag: string) => {
    await searchCharities(tag) //
      .then((res) => {
        navigate(`/search/${tag}`, {
          state: { res, tag },
        });
      })
      .then()
      .catch((err) => console.log(`err :: ${err}`));
  };

  const isExisting = favorites.some((data) => data.name === name);

  const handleAdd = (added: CharityType) => {
    if (!isExisting) {
      setFavorites([...favorites, added]);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    setSuccess("Added successfully.");
    setSave(!save);
    setTimeout(() => {
      setSuccess("");
    }, 2000);
  };
  const handleRemove = (deleted: CharityType) => {
    console.log(`>>`);
    setSave(false);
    setFavorites(favorites.filter((item) => item.name !== deleted.name));
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <section className="sub-wrap grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
      <div className="col-span-2 rounded-sm shadow-md">
        {coverImageUrl ? (
          <img
            src={coverImageUrl}
            alt={name}
            className=" w-full rounded-t-sm"
          />
        ) : (
          <div className="bg-bg flex h-[20vh] w-full items-center justify-center rounded-t-sm bg-no-repeat">
            <p className="text-3xl opacity-50">No Image</p>
          </div>
        )}
        <div className="p-10">
          <div className="border-mainBeige flex items-center justify-between border-b pb-5">
            <div className="flex items-center gap-4">
              {logoUrl ? (
                <img src={logoUrl} alt={name} className="rounded-full" />
              ) : (
                <span className="bg-mainGray h-[48px] w-[48px] rounded-full" />
              )}
              <h3 className="text-xl font-semibold">{name}</h3>
            </div>
            <div className="bg-mainBeige my-2 flex w-fit items-center gap-2 rounded-sm px-1 text-sm">
              <IoLocationSharp className="fill-pointRed" />
              <span>{location ? location.split(",", 3) : "N / A"}</span>
            </div>
          </div>

          <p className="mt-5">{description}</p>
        </div>
      </div>
      <div className="col-span-2 rounded-sm p-6 shadow-md md:col-span-1">
        <div className="relative mb-5 flex flex-col gap-3 text-center text-white">
          {success && (
            <span className=" bg-pointNavy absolute -top-8 w-full rounded-sm py-1 text-sm text-white">
              {success}
            </span>
          )}
          {save || isExisting ? (
            <button
              onClick={() => handleRemove({ ...charityData })}
              className="cursor-pointer rounded-sm bg-green-900 py-3 transition-all hover:contrast-150"
            >
              Remove from favorites
            </button>
          ) : (
            <button
              onClick={() => handleAdd({ ...charityData })}
              className="bg-pointRed cursor-pointer rounded-sm py-3 transition-all hover:contrast-150"
            >
              Add to favorites
            </button>
          )}

          <a
            href={profileUrl}
            target="_blank"
            className="bg-pointNavy rounded-sm py-3 transition-all hover:contrast-150"
          >
            Check it in Every.org
          </a>
        </div>
        <div className="mt-10">
          <h6 className="border-x-mainBeige border-b pb-2 font-semibold">
            # Tag
          </h6>
          <div className="mt-3 flex flex-wrap gap-3">
            {tags.map((tag: any) => (
              <span
                onClick={() => handleSearch(tag)}
                key={tag}
                className="bg-mainBeige cursor-pointer rounded-sm px-2 text-sm  transition-all hover:contrast-50"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export function readCharitesFromLocalStorage() {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
}
