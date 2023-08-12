import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3c0a70a1064a4b329adb49f54f93b2c4", // rawg api key
  },
});
