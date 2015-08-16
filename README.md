# dele
['deːlə], verb
**Social sharing links made easy**

### Installation
Install using NPM

    $ npm install dele --save-dev

### Usage
Browserify example;
See also example/browserify/browserify.html
**Javascript**

    // something.js
    window.dele = require('dele');
**HTML**

    // something.html
    <a href="javascript:dele().facebook()">Share on Facebook</a>
    <a onclick="dele().facebook()">Share on Facebook</a>