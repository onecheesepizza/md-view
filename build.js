const fs = require('fs-extra');

//node_modules to copy on build
const nodeModules = [
    'github-markdown-css',
    'highlight.js',
    'clipboard/dist'
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
        fs.copy('./node_modules/' + file, './build/' + file, (err) => {
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