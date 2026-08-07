import { getUsersByFrequency } from "../services/user.service.js";
import { fetchTopHeadlines } from "../services/news.service.js";
import { sendMail } from "../services/mail.service.js";
import generateNewsletter from "../templates/newsletter.template.js";

export const runNewsletterJob = async (frequency) => {
  console.log(`Running ${frequency} newsletter job...`);

  // Get all users for the given frequency
  const users = await getUsersByFrequency(frequency);

  if (!users.length) {
    console.log("No users found.");
    return;
  }

  // Collect all unique categories
  const uniqueCategories = [
    ...new Set(users.flatMap((user) => user.categories)),
  ];

  // Fetch news once for each category
  const newsCache = {};

  await Promise.all(
    uniqueCategories.map(async (category) => {
      try {
        const articles = await fetchTopHeadlines({ category });

        newsCache[category] = articles;
      } catch (error) {
        console.error(`Failed to fetch ${category} news`);
        console.error(error.response?.data || error.message);

        newsCache[category] = [];
      }
    }),
  );

  // Send newsletter to every user
  for (const user of users) {
    const seenUrls = new Set();

    const allNews = user.categories.map((category) => ({
      category,
      articles: (newsCache[category] || []).filter((article) => {
        if (seenUrls.has(article.url)) {
          return false;
        }

        seenUrls.add(article.url);
        return true;
      }),
    }));

    const html = generateNewsletter(allNews);
    const today = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    await sendMail({
      to: user.email,
      subject: `📰 NewsPulse ${frequency} Digest • ${today}`,
      html,
    });

    console.log(`Newsletter sent to ${user.email}`);
  }
};
