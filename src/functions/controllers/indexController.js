// Handle Author update on POST.
const axios = require('axios');
const showdown = require('showdown');
const showdownHighlight = require('showdown-highlight');
const converter = new showdown.Converter({
    extensions: [showdownHighlight]
});
// enable automatic URL linking etc via github flavor
converter.setFlavor('github');
converter.setOption('ghCodeBlocks', true);

exports.index = function(req, res, next) {
    // get file URL from request
    let mdFileURL = req.query.url;
    // render input form if... 
    if ( 
        //no url 
        !mdFileURL 
        ) {
        res.send("<p>this is a test</p>");
        // res.render('url-input', {
        //     pageStyle: 'form-reset.css',
        //     title: 'md-view',
        // });
    // render markdown if .md file provided in URL  
    } else if (mdFileURL.slice(-3) === '.md' || mdFileURL.slice(-8,-5) === '.md'){
        // append &dl=1 to file if needed to allow Dropbox share links
        if (mdFileURL.slice(-3) === '.md') {
            mdFileURL = mdFileURL + "?dl=1";
        } else if (mdFileURL.slice(-8) === '.md?dl=0') {
            mdFileURL = (mdFileURL.slice(0, -8)) + '.md?dl=1';
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
            res.render('url-input', {
                pageStyle: 'form-reset.css',
                title: 'md-view',
                message: '.md file not found'
            });
        });
    } else {
        console.log("invalid URL");
        res.render('url-input', {
            pageStyle: 'form-reset.css',
            title: 'md-view',
            message: 'invalid url'
        });
    }
};