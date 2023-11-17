import { IoLocationSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

export const CharityDetail = () => {
  const {
    state: { charity },
  } = useLocation();

  const {
    logoUrl,
    name,
    profileUrl,
    description,
    location,
    tags,
    coverImageUrl,
  } = charity.charity;

  return (
    <section className="sub-wrap grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
      <div className="col-span-2 rounded-sm shadow-md">
        <img src={coverImageUrl} alt={name} className=" rounded-t-sm" />
        <div className="p-10">
          <div className="border-mainBeige flex items-center justify-between border-b pb-5">
            <div className="flex items-center gap-4">
              <img
                src={logoUrl}
                alt=""
                className="border-mainBeige rounded-full border"
              />
              <h3 className="text-xl font-semibold">{name}</h3>
            </div>
            <div className="bg-mainBeige my-2 flex w-fit items-center gap-2 rounded-sm px-1 text-sm">
              <IoLocationSharp className="fill-pointRed" />
              <span>{location}</span>
            </div>
          </div>

          <p className="mt-5">{description}</p>
        </div>
      </div>
      <div className="col-span-2 rounded-sm p-6 shadow-md md:col-span-1">
        <div className="mb-5 flex flex-col gap-3 text-center text-white">
          <Link
            to="/favorites"
            className="bg-pointRed rounded-sm py-3 transition-all hover:contrast-150"
          >
            Add to favorites
          </Link>
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
              <a
                href=""
                key={tag}
                className="bg-mainBeige rounded-sm px-2 text-sm  transition-all hover:contrast-50"
              >
                #{tag}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
