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
    <a onclick="dele().twitter()">Share on Twitter</a>

**Custom URL and title**

**dele** shares the current url and current title by default.

If you wish to override this, simply use ``url()`` and ``title()``

    // something.html
    <a onclick="dele().url('http://github.com/ecrmnn').title('@ecrmnn').linkedIn()">
        Share on Facebook
    </a>
    