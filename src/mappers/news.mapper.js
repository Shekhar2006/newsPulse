export const mapNewsArticle = (article) => ({
  title: article.title,
  description: article.description,
  image: article.image_url,
  url: article.link,
  source: article.source_name,
  publishedAt: article.pubDate,
});