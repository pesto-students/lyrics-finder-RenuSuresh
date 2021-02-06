import axios from "axios";

const getSuggest = axios.create({
  baseURL: "https://api.lyrics.ovh/suggest/",
});

const getLyrics = axios.create({
  baseURL: "https://api.lyrics.ovh/v1/",
});
export { getSuggest, getLyrics };
