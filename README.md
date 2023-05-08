# wiki-scraper-microservice
https://wiki-scraper-microservice.wl.r.appspot.com

Change log
Version	Change	Date
1.0	Initial version.	May 7, 2023

This microservice allows you to send http get requests to get a response that contains the summary part of a given article, as well as the associated main image.
==========================================================================================================================================
Get an article scraped:

    GET /wiki/:article_title

Path Parameters:
    :article_title      title of the Wikipedia article to scrape.

Request Body:
    None

Response Body Format:
    JSON

Response Statuses:
Success	200 OK	
Failure	404 Not Found	No article with the provided title exists

Response Examples:

    Success:
Request:
GET https://wiki-scraper-microservice.wl.r.appspot.com/wiki/javascript
Response:
Status: 200 OK

{
    "content": "JavaScript (/ˈdʒɑːvəskrɪpt/), often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.\nJavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.[10] It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).\nThe ECMAScript standard does not include any input/output (I/O), such as networking, storage, or graphics facilities. In practice, the web browser or other runtime system provides JavaScript APIs for I/O.\nJavaScript engines were originally used only in web browsers, but are now core components of some servers and a variety of applications. The most popular runtime system for this usage is Node.js.\nAlthough Java and JavaScript are similar in name, syntax, and respective standard libraries, the two languages are distinct and differ greatly in design.",
    "image": "//upload.wikimedia.org/wikipedia/commons/a/a4/JavaScript_code.png",
    "self": "https://en.wikipedia.org/wiki/javascript"
}


    Failure:
Request:
GET https://wiki-scraper-microservice.wl.r.appspot.com/wiki/something_imaginary
Response:
Status: 404 Not Found

{    
"Error": "No article with the provided title exists"
}
