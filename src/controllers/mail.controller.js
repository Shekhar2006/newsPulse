import { fetchTopHeadlines } from "../services/news.service.js";
import { sendMail } from "../services/mail.service.js";
import generateNewsletter from "../templates/newsletter.template.js";

export const sendNewsletter = async (req, res) => {
  const { email, category } = req.body;

  const articles = await fetchTopHeadlines({ category });

  const allNews = [
    {
      category,
      articles,
    },
  ];

  const html = generateNewsletter(allNews);

  await sendMail({
    to: email,
    subject: `${category} News`,
    html,
  });

  res.status(200).json({
    success: true,
    message: "Newsletter sent successfully.",
  });
};
