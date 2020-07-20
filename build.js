const fs = require('fs-extra');

//files to copy on build
const buildFiles = [
    './node_modules/github-markdown-css',
    './node_modules/highlight.js',
    './node_modules/clipboard/dist',
    './src/stylesheets',
];

//create output folder
fs.emptyDir('build', (err) => {
    if (err) throw err;
    buildFiles.forEach(file => {
        //copy files
        fs.copy('' + file, './build/' + file, (err) => {
            if (err) throw err;
            console.log(file, 'was copied to /build/',);
        });
    })
});