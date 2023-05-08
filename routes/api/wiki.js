'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const wikiController = require('../../controllers/wikiController');

const app = express();
app.use(bodyParser.json());
const router = express.Router();


router.get('/:article_title', function (req, res) {
    wikiController.get_article(req.params.article_title)
    .then(content => {
        if (content === undefined || content === null) {
            // no article with title
            res.status(404).json({"Error": "No article with the provided title exists"});
        } else {
            // found article with title
            const self = `https://en.wikipedia.org/wiki/${req.params.article_title}`;
            content.self = self;
            res.status(200).json(content);
        }
    })
});

module.exports = router;