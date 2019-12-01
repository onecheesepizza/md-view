# md-view

A simple [Express](https://expressjs.com/) app that displays a markdown file from a URL, including [shared Dropbox URLs](https://help.dropbox.com/files-folders/share/view-only-access). When deployed, it can be used to modify a raw markdown URL to make it immediately viewable in the broswer when shared. 

Use at: 

----

## about

Served using [Node.js](https://nodejs.org/), [Express](https://expressjs.com/), [express-handlebars](https://github.com/ericf/express-handlebars), and [Axios](https://github.com/axios/axios). 

Markdown converted to HTML with [Showdown](http://showdownjs.com/), and styled with [github-markdown-css](https://github.com/sindresorhus/github-markdown-css).

Code highlighting by [highlight.js](https://highlightjs.org/) and [showdown-highlight](https://github.com/Bloggify/showdown-highlight). 

Clipboard copy functionality by [clipboard.js](https://clipboardjs.com/).

----

![md-view](/public/images/md-view-sc-640-opt2.gif)

----
## run locally

`git clone` the repo to your computer, `cd` to the app directory, then:

```bash
npm install
npm start
```
or
```bash
npm install
node bin/www
```
and visit http://localhost:3000