'use strict';

const scraper = require('./scraper');


async function get_article(title) {
    const content = await scraper.getWikiIntro(title);
    if (content === null) return null;

    const imgURL = await scraper.getWikiImage(title);

    return {
        content: content,
        image: imgURL
    };
}

module.exports = {
    get_article
}