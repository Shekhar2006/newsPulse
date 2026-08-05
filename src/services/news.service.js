import api from "../config/axios.js";
import { env } from "../config/env.js";
import { mapNewsArticle } from "../mappers/news.mapper.js";

export const fetchTopHeadlines = async () => {
  const response = await api.get("/top-headlines", {
    params: {
      category: "general",
      lang: "en",
      max: 10,
      apikey: env.gnewsApiKey,
    },
  });

  const articles = response.data.articles.map(mapNewsArticle);

  return articles;
};
