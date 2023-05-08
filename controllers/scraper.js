const axios = require('axios');
const cheerio = require('cheerio');

// null when article does not exist, else text content, image returns URL
async function getWikiIntro(title) {
  const url = `https://en.wikipedia.org/wiki/${title}`;
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    
    if ($("div.no-article-text-sister-projects").length !== 0) {
      return null;
    }

    const articleIntro = $("table")
      .first()
      .nextUntil("h2")
      .text()
      .trim();
    return articleIntro;
  } catch (error) {
    console.error(error);
    return null;
  }
};

async function getWikiImage(title) {
  const url = `https://en.wikipedia.org/wiki/${title}`;
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    if ($("div.no-article-text-sister-projects").length !== 0) {
      return null;
    }

    const link = $("a.image")
      .first()
      .attr("href");

    const url2 = `https://en.wikipedia.org${link}`;
    try {
      const response = await axios.get(url2);
      const $ = cheerio.load(response.data);
      const link = $("div.fullImageLink")
        .find("a")
        .first()
        .attr("href");
  
      return link;
    } catch (error) {
      console.error(error);
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = {
  getWikiIntro,
  getWikiImage
}
// Test
getWikiIntro('JavaScript')
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

getWikiImage('JavaScript')
  .then((result) => console.log(result))
  .catch((error) => console.error(error));