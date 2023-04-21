import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b6b794649a064345a71c56c43edead0a",
  },
});

// key: "c7524facb43a44c6b91d38b352a46642",
