import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 750plq2ZS6PhAaA29VjlB7hF9dVok9hT8oT4Q2MSxY1tVZuKZbTorO65XM4x-HT2NRiBzc2JkuggZg-nuBgxooa0aBWHd-HCxEecPVCMfPZ4d6Aoijio8PkxmjTvYHYx",
  },
});
