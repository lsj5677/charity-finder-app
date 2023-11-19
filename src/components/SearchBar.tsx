import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { searchCharities } from "../api/CharityApi";

export default function SearchBar() {
  const [text, setText] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text.trim().length === 0) {
      window.alert("Please enter your keyword");
      return;
    }
    const keyword = text.toLowerCase();
    await searchCharities(keyword) //
      .then((res) => {
        navigate(`/search/${keyword}`, {
          state: { res, keyword },
        });
      })
      .then()
      .catch((err) => console.log(`err :: ${err}`));
  };

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
          onChange={(e) => setText(e.target.value)}
          placeholder="Search api..."
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 shadow-md focus:border-blue-500 focus:ring-blue-500 "
        />
        <button className="bg-pointNavy absolute bottom-2.5 end-2.5 rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
          Search
        </button>
      </div>
    </form>
  );
}
