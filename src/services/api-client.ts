import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0a616af3e25e4a46be26f788552fc310", // rawg api key
  },
});

// apiKey is only for FE dev processes.
// using a BE service it should be stored safely on the env vars
