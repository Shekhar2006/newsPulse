import { fetchTopHeadlines } from "../services/news.service.js";
import { NEWS_CATEGORIES } from "../constants/news.constants.js";
import AppError from "../errors/AppError.js";


export const getTopHeadlines = async (req, res) => {
  const { category = "general" } = req.query;
  
  if(!NEWS_CATEGORIES.includes(category)){
    throw new AppError("Invalid news category.", 400);
  }

  const articles = await fetchTopHeadlines({category});

  res.status(200).json({
    success: true,
    count: articles.length,
    articles,
  });
};
