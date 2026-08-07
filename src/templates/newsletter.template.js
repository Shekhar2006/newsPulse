const generateNewsletter = (allNews) => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>NewsPulse</title>

<style>
body{
    margin:0;
    padding:0;
    background:#f4f6f9;
    font-family:Arial,Helvetica,sans-serif;
}

.wrapper{
    width:100%;
    padding:30px 0;
}

.container{
    max-width:700px;
    margin:auto;
    background:#ffffff;
    border-radius:12px;
    overflow:hidden;
    box-shadow:0 5px 20px rgba(0,0,0,.08);
}

.header{
    background:#2563eb;
    color:white;
    text-align:center;
    padding:35px;
}

.header h1{
    margin:0;
    font-size:34px;
}

.header p{
    margin:10px 0 0;
    opacity:.9;
    font-size:16px;
}

.content{
    padding:30px;
}

.category{
    margin-top:40px;
    margin-bottom:20px;
    color:#2563eb;
    border-left:5px solid #2563eb;
    padding-left:12px;
    font-size:24px;
}

.card{
    margin-bottom:30px;
    border:1px solid #e5e7eb;
    border-radius:10px;
    overflow:hidden;
    box-shadow:0 2px 8px rgba(0,0,0,.05);
}

.card img{
    width:100%;
    display:block;
}

.placeholder{
    height:220px;
    background:#e5e7eb;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#6b7280;
    font-size:18px;
}

.card-body{
    padding:20px;
}

.card h3{
    margin:0 0 10px;
    color:#111827;
}

.meta{
    color:#6b7280;
    font-size:14px;
    margin-bottom:10px;
}

.description{
    color:#4b5563;
    line-height:1.6;
}

.button{
    display:inline-block;
    margin-top:15px;
    padding:12px 22px;
    background:#2563eb;
    color:white !important;
    text-decoration:none;
    border-radius:8px;
    font-weight:bold;
}

.footer{
    background:#f9fafb;
    text-align:center;
    padding:30px;
    color:#6b7280;
    font-size:14px;
    line-height:1.8;
}
</style>

</head>

<body>

<div class="wrapper">

<div class="container">

<div class="header">

<h1>📰 NewsPulse</h1>

<p>${today}</p>

<p>Your personalized daily news digest is here.</p>

</div>

<div class="content">

${allNews
  .filter((section) => section.articles.length > 0)
  .map(
    (section) => `

<h2 class="category">
${section.category.toUpperCase()}
</h2>

${section.articles
  .slice(0, 4)
  .map(
    (article) => `

<div class="card">

${
  article.image
    ? `<img src="${article.image}" alt="${article.title}">`
    : `<div class="placeholder">No Image Available</div>`
}

<div class="card-body">

<h3>${article.title}</h3>

<div class="meta">

<b>Source:</b> ${article.source || "Unknown"}

<br>

<b>Published:</b> ${article.publishedAt || "N/A"}

</div>

<p class="description">

${article.description || "No description available."}

</p>

<a class="button" href="${article.url}" target="_blank">

Read Full Article →

</a>

</div>

</div>

`
  )
  .join("")}

`
  )
  .join("")}

</div>

<div class="footer">

<p>

Thanks for staying informed with <b>NewsPulse</b>.

</p>

<p>

You're receiving this email because you're subscribed to the NewsPulse newsletter.

</p>

<p>

Have a wonderful day! 🚀

</p>

<p>

© ${new Date().getFullYear()} NewsPulse. All rights reserved.

</p>

</div>

</div>

</div>

</body>

</html>
`;
};

export default generateNewsletter;