# udemy-crawler

[![Build Status](https://travis-ci.org/petehouston/udemy-crawler.svg?branch=master)](https://travis-ci.org/petehouston/udemy-crawler)

**udemy-crawler** crawls a Udemy course data by a given url, scrapes it and provides JSON back.

# Installation

```
$ npm i -g udemy-crawler
```

or if you want to import in a project (install it locally):

```
$ npm i udemy-crawler -S
```

In case you'll change `./src/crawler.es.js`, you will also need to install rollup (globally), to run tests and to build/compile the app (`npm run build`; see package.json for other scripts):

```
npm install --global rollup
```

Then, to run tests:

```
npm test
```

## via Docker

You can make a Docker build for the udemy crawler CLI.

```
$ docker build -t udemy-crawler .
$ docker run udemy-crawler
```

You need to provide Udemy course URL, so it will be like:

```
$ docker run udemy-crawler https://www.udemy.com/success-life/
```

# Usage

## Command-line

```bash
$ udemy-crawler [URL]
```

Example and sample output

```bash
$ udemy-crawler https://www.udemy.com/code-grow-rich-earn-more-as-an-entrepreneur-or-developer/

Parsing Url: https://www.udemy.com/code-grow-rich-earn-more-as-an-entrepreneur-or-developer/

And getting JSON back:
{
    "id": "481696",
    "title": "Code & Grow Rich: Earn More As An Entrepreneur Or Developer",
    "headline": "Make More Money as an Entrepreneur, Web & Mobile App Developer, Software Engineer, Startup Junkie, or Programmer",
    "date": "Last updated 2/2016",
    "image": "https://i.udemycdn.com/course/750x422/481696_756c_3.jpg",
    "description": "<p><strong>----------------------------------------------------------------------------------------------------------------<br><em><br>*Feb 16th 2016*</em></strong></p><ul><li><strong>Over 3100 student enrollments within the first four days of course launch!</strong></li><li><strong>Now with over 57 hours of video content and 500+ pages of curated resources!</strong></li><li><strong>11 discrete income producing trajectories!</strong></li><li><strong>Over 100 real-world mock interactions (phone calls and email templates)!  </strong></li></ul><p><strong><br>Code &amp; Grow Rich is a comprehensive course that empowers both non-technical entrepreneurs and software developers with the skills to succeed in today\'s techno-centric business world. </strong><strong>-----------------------------------------------------------------------------------------------------------------</strong></p> (...)",
    audiences: [
                'entrepreneurs',
                'mobile app developers ',
                'web developers',
                'startup founders ',
                'non-technical individuals that want a blue-print for profiting through technology',
                'software engineers ',
                'computer science students ',
                'video game developers ',
                'non-technical co-founders who want to scale a startup',
                'software developers ',
                'computer programmers ',
                'software architects ',
                'intrapreneurs that want to learn how to better weave technology into their current role ',
                'web designers',
                'career switchers who are looking to explore how technology and entrepreneurship can be used to replace their 9-5 jobs',
                'marketers ',
                'growth hackers ',
                'traditional or online teachers / instructors ',
                'engineers and software developers ',
                'user experience designers (UX designers) & user interface designers (UI designers) ',
                'information technology professionals and managers ',
                'database administrators and database architects ',
                'information security analysts ',
                'hackers ',
                'computer systems analysts ',
                'website content developers and website conversion experts ',
                'content management system (CMS) developers and enterprise resource planning (ERP) experts  ',
                'data scrapers ',
                'data miners ',
                'data analysts ',
                'cyber-security experts '
            ],
    "topics": [
                'Development',
                'Web Development',
                'Entrepreneurship Fundamentals'
            ],
    "couponCode": "SUMMERSALE",
    "price": 10.99,
    "fullPrice": 199.99,
    "discount": 94,
    "curriculum":
    {
        "contents": [ [Object], [Object], [Object], [Object], [Object] ],
        "courseLength": '02:36:13'
    },
    "authors": [ 'Giles McMullen-Klein' ]
```

## API

```js
// import the package
import UdemyCrawler from 'udemy-crawler'
```

```js
// apply options
const crawler = new UdemyCrawler({
  headers: {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
    'upgrade-insecure-requests': 1
  }
})

// execute crawler
const scrapeUdemyCourseToJSON = async url => {
  return crawler.execute(url, (err, course) => {
    if (err) {
      return console.error(err.message)
    }
    // console.log('Finishing scraping...', course)
    return course
  })
}
```

```js
// somewhere else
const udemyCourseContents = await scrapeUdemyCourseToJSON('your_url')
```

### Method: `execute(url[, callback])`

#### Arguments

- **url: String** - The udemy course URL to parse. It should start with following: `https://www.udemy.com/` and ends optionally with `?couponCode=CODE`. The crawling won't start without the course url.
- **callback(err, course): Function** (Optional).
  - **err: Error** - will be `null` if no error occurred.
  - **course: Object** - is the result course info in below format.

**course: Object** format:

```js
{
    "id": String,
    "title": String,
    "headline": String,
    "date": String, /* last date of update of the course */
    "image": String, /* the 750x422 size */
    "description": String, /* the HTML format */
    "couponCode": String, /* defaults to "" */
    "price": Number, /* current price (floating point number) */
    "fullPrice": Number, /* list price (floating point number) */
    "discount": Number, /* course discount in percent: default 0. Max value is 100. */
    "audiences": String[], /* target audiences */
    "curriculum": Object[], /* table of contents aka list of lectures */
    "topics": String[], /* course keywords aka topics */
    "authors": String, /* author of the course */
    "discountExpiration": Date /* date of the discount's expiration */
}
```

**Note**:

- `discount = 0` and `price = 0`: this is **FREE COURSE**.
- `discount = 100`: this is **100% OFF** with `couponCode` value set.

# License

[MIT](LICENSE.md)
2018 by [Pete Houston](https://petehouston.com)
2019 by [D. Galakhov](http://galakhov.de)
