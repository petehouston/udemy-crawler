#!/usr/bin/env node

var UdemyCrawler = require('../build/crawler');

var usage = function () {
    return 'Usage:\n' +
           '    $ udemy-crawler [UDEMY_COURSE_URL]\n' +
           '\n' +
           'Example:\n' +
           '    $ udemy-crawler https://udemy.com/successful-life\n';
}

var cli_input = process.argv.slice(2);

if(cli_input.length < 1) {
    console.log(usage());
    console.error('[ERROR] Please input an Udemy course URL to query.');
    process.exit(-1);
}

var crawler = new UdemyCrawler({
    http: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
        'upgrade-insecure-requests': 1
    }
});

console.log('Parsing Url: ' + cli_input[0]);

crawler.execute(cli_input[0], function (err, course) {
    
    if(err) {        
        return console.error(err);
    }

    console.log(JSON.stringify(course, null, 4));
});

