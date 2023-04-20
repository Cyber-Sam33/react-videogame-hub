import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c7524facb43a44c6b91d38b352a46642",
  },
});
