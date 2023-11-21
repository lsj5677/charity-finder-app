import axios from "axios";
import causes from "../utils/causes.json";

const causeList = causes.causes;
let randCauses = causeList[Math.floor(Math.random() * causeList.length)];

let CHARITY_API_ENDPOINT = `${
  import.meta.env.VITE_BASE_URL
}/browse/${randCauses}?apiKey=${import.meta.env.VITE_API_KEY}`;

export const getCharities = async () => {
  try {
    const res = await axios.get(CHARITY_API_ENDPOINT);
    return res.data;
  } catch (err) {
    console.log("err ::", err);
    throw err;
  }
};

export const searchCharities = async (text: string) => {
  const SEARCH_API_ENDPOINT = `${
    import.meta.env.VITE_BASE_URL
  }/search/${text}?apiKey=${import.meta.env.VITE_API_KEY}`;

  try {
    const res = await axios.get(SEARCH_API_ENDPOINT);
    return res.data;
  } catch (err) {
    console.log("err ::", err);
    throw err;
  }
};
