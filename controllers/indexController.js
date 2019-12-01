// Handle Author update on POST.
const axios = require('axios');
const showdown = require('showdown');
const showdownHighlight = require('showdown-highlight')
const converter = new showdown.Converter({
    extensions: [showdownHighlight]
});
// enable automatic URL linking etc via github flavor
converter.setFlavor('github');
converter.setOption('ghCodeBlocks', true);

exports.index = function(req, res, next) {
    // get file URL from request
    let mdFileURL = req.query.url;

    // render input form if no file provided in URL, or if file in URL does not end with .md 
    if (!mdFileURL || mdFileURL.slice(mdFileURL.length-3) != '.md') {
        res.render('url-input', {
            pageStyle: 'form-reset.css'
        });
    // render markdown if .md file provided in URL  
    } else {
        // append &dl=1 to file if needed to allow raw Dropbox files
        if (mdFileURL.slice(mdFileURL.length-3) === '.md') {
            mdFileURL = mdFileURL + "?dl=1";
        } else if (mdFileURL.slice(mdFileURL.length-8) === '.md?dl=0') {
            mdFileURL = (mdFileURL.slice(0, mdFileURL.length-8)) + '.md?dl=1';
        }

        // get data from URL
        console.log('getting file from:', mdFileURL);
        axios
        .get(mdFileURL)
        .then(function(response) {
            // handle success
            console.log('file received.');
            
            // convert Markdown to HTML
            const markdownHTML = converter.makeHtml(response.data);
            console.log('MD converted to HTML.');

            // render page
            res.render('index', {
                mdHTML: markdownHTML,
                mdFileURL: mdFileURL,
                title: 'md-view',
                highlightStyle: 'highlight.js/styles/atom-one-dark.css'
            });
            console.log('HTML response sent.');
        })
        .catch(function(error) {
            // handle error
            console.log(error);
        });
    }
};