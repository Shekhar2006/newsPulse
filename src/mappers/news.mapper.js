export const mapNewsArticle = (article) => ({
    title: article.title,
    description: article.description,
    image: article.image,
    url: article.url,
    source: article.source.name,
    publishedAt: article.publishedAt,
});