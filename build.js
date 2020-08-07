const fs = require('fs-extra');

//node_modules to copy on build
const nodeModules = [
    './node_modules/github-markdown-css',
    './node_modules/highlight.js',
    './node_modules/clipboard/dist'
];
//files to copy on build
const srcAssetFiles = [
    'stylesheets',
    'favicon.png'
];

//create output folder
fs.emptyDir('build', (err) => {
    if (err) throw err;
    //copy node modules
    nodeModules.forEach(file => {
        //copy files
        fs.copy('' + file, './build/' + file, (err) => {
            if (err) throw err;
            console.log(file, 'was copied to /build/',);
        });
    });
    //copy asset files
    srcAssetFiles.forEach(file => {
        //copy files
        fs.copy('./src/' + file, './build/' + file, (err) => {
            if (err) throw err;
            console.log(file, 'was copied to /build/',);
        });
    });
});