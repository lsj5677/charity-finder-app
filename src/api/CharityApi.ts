import axios from "axios";
import causes from "../utils/causes.json";

const casuesList = causes.causes;
let randCauses = casuesList[Math.floor(Math.random() * casuesList.length)];

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
  }/browse/${text}?apiKey=${import.meta.env.VITE_API_KEY}`;

  try {
    const res = await axios.get(SEARCH_API_ENDPOINT);
    return res.data;
  } catch (err) {
    console.log("err ::", err);
    throw err;
  }
};
