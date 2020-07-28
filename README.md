# md-view

A simple [Express](https://expressjs.com/) app deployed as a [Netlify](https://www.netlify.com/products/functions/) serverless function that parses and displays a markdown file from a URL, including [shared Dropbox URLs](https://help.dropbox.com/files-folders/share/view-only-access). When deployed, it can modify a raw markdown URL to make it immediately viewable in the browser for sharing. 

Use at: [https://mdview.app](https://mdview.app)  
Example: [https://mdview.app/?url=https://raw.githubusercontent.com/microsoft/vscode/master/README.md](https://mdview.app/?url=https://raw.githubusercontent.com/microsoft/vscode/master/README.md)  

# about

Served using [Netlify Functions](https://www.netlify.com/products/functions/), [Node.js](https://nodejs.org/), [serverless-http](https://github.com/dougmoscrop/serverless-http), [Express](https://expressjs.com/), [express-handlebars](https://github.com/ericf/express-handlebars), and [Axios](https://github.com/axios/axios). 

Markdown converted to HTML with [Showdown](http://showdownjs.com/), and styled with [github-markdown-css](https://github.com/sindresorhus/github-markdown-css).

Code highlighting by [highlight.js](https://highlightjs.org/) and [showdown-highlight](https://github.com/Bloggify/showdown-highlight). 

Clipboard copy functionality by [clipboard.js](https://clipboardjs.com/).

Deployed to [Netlify](https://www.netlify.com/)  
[![Netlify Status](https://api.netlify.com/api/v1/badges/7b535e5a-39e2-475a-9547-887287402f68/deploy-status)](https://app.netlify.com/sites/mdview/deploys)

----

![md-view](https://github.com/onecheesepizza/md-view/blob/master/README-md-view-sc-640-opt2.gif?raw=true)

# run locally
using [Netlify Dev](https://github.com/netlify/cli/blob/master/docs/netlify-dev.md)  
```bash
npm install netlify-cli -g
```

GitHub: [https://github.com/onecheesepizza/md-view](https://github.com/onecheesepizza/md-view)


`git clone` the repo to your computer, `cd` to the repo directory, then:

```bash
npm install
npm start
```