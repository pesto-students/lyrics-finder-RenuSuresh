import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.lyrics.ovh/suggest/",
});

const lyricsInstance = axios.create({
  baseURL: "https://api.lyrics.ovh/v1/",
});
export { instance, lyricsInstance };
