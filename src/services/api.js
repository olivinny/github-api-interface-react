import axios from "axios";

const getBaseUrl = axios.create({
  baseURL: "https://api.github.com/",
});

export default getBaseUrl;
