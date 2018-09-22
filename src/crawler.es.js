import cheerio from 'cheerio';
import request from 'sync-request';
import normalizeUrl from 'normalize-url';
import { URL } from 'url';

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

        let objUrl = new URL(normalizeUrl(url));

        if(objUrl.hostname !== 'udemy.com' && objUrl.hostname !== 'www.udemy.com') {
            return _cb(new Error('Invalid udemy.com course url'));
        }

        if(objUrl.pathname == null || objUrl.pathname === '/') {
            return _cb(new Error('Must point to udemy.com/course-path'));
        }
        
        let requestUrl = 'https://www.udemy.com' + objUrl.pathname;

        if(objUrl.search) {
            requestUrl += objUrl.search;
        } else {
            if(!requestUrl.endsWith('/')) {
                requestUrl += '/';
            }
        }

        let Course = {
            url: requestUrl
        };

        // coupon
        Course.couponCode = objUrl.searchParams.get('couponCode') || '';        

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
        let apiUrl = this._getApiUrl(Course.id, ['topic_menu', 'description', 'purchase']) + '&couponCode=' + Course.couponCode;
        let resApi = request('GET', apiUrl, {
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

        // price, discount
        Course.price = jsonData.purchase.list_price.amount;        
        if(!!jsonData.purchase.discount && jsonData.purchase.discount.discount_percent === 100) {
            Course.discount = 100;
        } else {
            Course.discount = 0;
        }

        return _cb(null, Course);  
  
    }

}


export default UdemyCrawler;