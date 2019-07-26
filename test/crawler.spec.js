import { expect } from 'chai';
const should = require('chai').should();
import UdemyCrawler from '../src/crawler.es';

describe('Crawler:', () => {
    const SUCCESS_URL =
        'www.udemy.com/code-grow-rich-earn-more-as-an-entrepreneur-or-developer';
    const FAILURE_URL = 'https://www.udemy.com/not-existing-course';
    let ExpectCourse;

    let crawler;

    before(() => {
        ExpectCourse = {
            id: '481696',
            url:
                'https://www.udemy.com/code-grow-rich-earn-more-as-an-entrepreneur-or-developer/',
            title:
                'Code & Grow Rich: Earn More As An Entrepreneur Or Developer',
            headline:
                'Make More Money as an Entrepreneur, Web & Mobile App Developer, Software Engineer, Startup Junkie, or Programmer',
            image: 'https://i.udemycdn.com/course/750x422/481696_756c_3.jpg',
            topics: [
                'Development',
                'Web Development',
                'Entrepreneurship Fundamentals'
            ],
            description:
                '<p><strong>----------------------------------------------------------------------------------------------------------------<br><em><br>*Feb 16th 2016*</em></strong></p><ul><li><strong>Over 3100 student enrollments within the first four days of course launch!</strong></li><li><strong>Now with over 57 hours of video content and 500+ pages of curated resources!</strong></li><li><strong>11 discrete income producing trajectories!</strong></li><li><strong>Over 100 real-world mock interactions (phone calls and email templates)!  </strong></li></ul><p><strong><br>Code &amp; Grow Rich is a comprehensive course that empowers both non-technical entrepreneurs and software developers with the skills to succeed in today\'s techno-centric business world. </strong><strong>-----------------------------------------------------------------------------------------------------------------</strong></p>',
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

            couponCode: '',
            price: 10.99,
            discount: 94
        };
    });

    beforeEach(() => {
        crawler = new UdemyCrawler();
    });

    it('should query correct Udemy course info', done => {
        crawler.execute(SUCCESS_URL, (err, course) => {
            course.id.should.equal(ExpectCourse.id);
            course.title.should.equal(ExpectCourse.title);
            course.headline.should.equal(ExpectCourse.headline);
            course.image.should.equal(ExpectCourse.image);
            course.description
                .substr(0, 900)
                .replace(/\n|\r/g, '')
                .replace(/<br><br>/g, '')
                .should.equal(
                    ExpectCourse.description
                        .replace(/\n|\r/g, '')
                        .replace(/<br><br>/g, '')
                        .substr(0, 900)
                );
            const audiences = [];
            course.audiences.forEach(i => {
                audiences.push(i.trim());
            });
            const expectedAudiences = [];
            ExpectCourse.audiences.forEach(i => {
                expectedAudiences.push(i.trim());
            });
            expect(audiences).to.eql(expectedAudiences);
            expect(course.topics).to.have.members(ExpectCourse.topics);

            course.couponCode.should.equal(ExpectCourse.couponCode);
            course.price.should.equal(ExpectCourse.price);
            course.discount.should.equal(ExpectCourse.discount);

            done();
        });
    });

    it('should return Error on non-existing Udemy course', done => {
        crawler.execute(FAILURE_URL, err => {
            expect(err).to.not.be.null;
            expect(err).to.be.an.instanceof(Error);

            err.message.should.contains('Udemy page response with status');

            done();
        });
    });

    it('should return Error if not querying from udemy.com', done => {
        crawler.execute('abc.com', err => {
            expect(err).to.not.be.null;
            expect(err).to.be.an.instanceof(Error);

            err.message.should.contains('Invalid udemy.com');

            done();
        });
    });

    it('should return Error if querying from udemy home page', done => {
        crawler.execute('udemy.com', err => {
            expect(err).to.not.be.null;
            expect(err).to.be.an.instanceof(Error);

            err.message.should.contains('point to udemy.com/course-path');

            done();
        });
    });
});
