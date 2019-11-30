// Handle Author update on POST.
const axios = require('axios');
const showdown = require("showdown");
const showdownHighlight = require("showdown-highlight")
const converter = new showdown.Converter({
    extensions: [showdownHighlight]
});
//enable automatic URL linking etc via github flavor
converter.setFlavor('github');
converter.setOption('ghCodeBlocks', true);

exports.index = function(req, res, next) {
    //get file URL from request
    const mdFileURL = req.query.url;
    console.log("URL requested:", mdFileURL);
    console.log("getting file from URL...");
    //get data from URL
    axios
    .get(mdFileURL)
    .then(function(response) {
        // handle success
        console.log("file received.");
        
        // convert Markdown to HTML
        const markdownHTML = converter.makeHtml(response.data);
        console.log("MD converted to HTML.");

        // render page
        res.render('index', {
            mdHTML: markdownHTML,
            title: 'md-view',
            highlightStyle: 'highlight.js/styles/atom-one-dark.css'
        });
        console.log("HTML response sent.");
    })
    .catch(function(error) {
        // handle error
        console.log(error);
    });
};