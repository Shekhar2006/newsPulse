import api from "../config/axios.js";
import { env } from "../config/env.js";
import { mapNewsArticle } from "../mappers/news.mapper.js";
import AppError from "../errors/AppError.js";

export const fetchTopHeadlines = async ({ category = "top" }) => {
  try {
    const response = await api.get("/news", {
      params: {
        apikey: env.newsdataApiKey,
        category,
        language: "en",
      },
    });

    return response.data.results.map(mapNewsArticle);

  } catch (error) {
    console.error(error.response?.data);

    throw new AppError(
      error.response?.data?.results?.message ||
        error.response?.data?.message ||
        "Failed to fetch news",
      error.response?.status || 500
    );
  }
};