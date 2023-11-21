import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { searchCharities } from "../api/CharityApi";
import causes from "../utils/causes.json";
import { Dropdown } from "./Dropdown";

export default function SearchBar() {
  const causeList = causes.causes;
  const [text, setText] = useState<string>("");
  const [options, setOptions] = useState<any>(causeList);
  const [hasText, setHasText] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | string) => {
    if (typeof e !== "string") e.preventDefault();
    const keyword = text.toLowerCase();
    const filtered = causeList.filter((cause) => {
      return cause.includes(text);
    });

    if (text.trim().length === 0) {
      window.alert("Please enter your keyword");
      return;
    }

    if (filtered.length === 0) {
      alert("No result");
      setText("");
      return;
    }

    await searchCharities(keyword) //
      .then((res) => {
        navigate(`/search/${keyword}`, {
          state: { res, keyword },
        });
      })
      .then()
      .catch((err) => console.log(`err :: ${err}`));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    setHasText(true);
  };

  const handleDropDown = async (clickOption: string) => {
    await setText(clickOption);
    setHasText(false);
    await handleSubmit(clickOption);
  };

  useEffect(() => {
    if (text === "") {
      setHasText(false);
      setOptions([]);
    } else {
      setOptions(
        causeList.filter((cause) => {
          return cause.includes(text);
        }),
      );
    }
  }, [text]);

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-2 box-border flex w-full flex-auto items-center justify-center text-sm text-gray-900 sm:mt-0 sm:px-2"
    >
      <label htmlFor="search" className="sr-only mb-2 text-sm text-gray-900">
        Search
      </label>
      <div className="relative w-2/3">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3">
          <AiOutlineSearch size={25} />
        </div>
        <input
          type="text"
          name="search"
          id="search"
          value={text}
          onChange={handleChange}
          placeholder="Search api keyword..."
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 shadow-md focus:border-blue-500 focus:ring-blue-500 "
        />
        <button className="bg-pointNavy absolute bottom-2.5 end-2.5 rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
          Search
        </button>

        {hasText && (
          <Dropdown
            className="absolute top-12 z-10 flex w-full flex-wrap gap-3 rounded-b-lg rounded-t-sm border border-gray-300  bg-white p-2 shadow-md"
            options={options}
            handleDropDown={handleDropDown}
          />
        )}
      </div>
    </form>
  );
}
