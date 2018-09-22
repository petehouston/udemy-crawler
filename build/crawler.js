'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var cheerio = _interopDefault(require('cheerio'));
var request = _interopDefault(require('sync-request'));
var normalizeUrl = _interopDefault(require('normalize-url'));

class UdemyCrawler {

    constructor(config) {
        this.config = config || {
            headers: {
                'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'en-US,en;q=0.9',
                'Cache-Control': 'max-age=0'
            }
        };
    }

    _getApiUrl(id, components = []) {
        return 'https://www.udemy.com/api-2.0/course-landing-components/'+ id + '/me/?components=' + components.join(',');
    }

    execute(url, cb) {
        let _cb = cb || (() => {});


        if(!url) {
            return _cb(new Error('"url" parameter not defined!'));
        }                

        if(url.startsWith('udemy.com')) {
            url = 'www.' + url;
        }

        let requestUrl = normalizeUrl(url, {
            forceHttps: true,
            stripWWW: false,
            removeTrailingSlash: true
        });

        requestUrl += '/';

        if(!requestUrl.startsWith('https://www.udemy.com')) {
            return _cb(new Error('Invalid udemy.com url'));
        }

        if(requestUrl === 'https://www.udemy.com/') {
            return _cb(new Error('Must point to udemy.com/course-path'));
        }

        let Course = {};

        let resLandingPage = request('GET', requestUrl, {
            headers: {
                'User-Agent': this.config.headers['User-Agent']
            }
        });

        if(resLandingPage.statusCode !== 200) {
            return _cb(new Error('Udemy page response with status ' + resLandingPage.statusCode));
        }

        let $ = cheerio.load(resLandingPage.getBody());

        // id, title, headline, image
        Course.id = $('body#udemy').attr('data-clp-course-id');
        Course.title = $('.clp-lead__title[data-purpose="lead-title"]').text().trim();
        Course.headline = $('.clp-lead__headline[data-purpose="lead-headline"]').text().trim();
        let metaJson = JSON.parse($('#schema_markup script').html());
        Course.image = metaJson[0].image;
    
        // query API        
        let resApi = request('GET', this._getApiUrl(Course.id, ['topic_menu', 'description']), {
            headers: {
                'User-Agent': this.config.headers['User-Agent'],
                'Content-Type': 'application/json'
            }
        });

        if(resApi.statusCode !== 200) {
            return _cb(new Error('Udemy API page response with status ' + resApi.statusCode));
        }

        let jsonData = JSON.parse(resApi.getBody());

        // description, audiences, topics
        Course.description = jsonData.description.description;
        Course.audiences = jsonData.description.target_audiences;
        Course.topics = jsonData.topic_menu.menu_data.map(m => m.title || m.display_name);

        return _cb(null, Course);  
  
    }

}

module.exports = UdemyCrawler;
