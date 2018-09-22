
import chai from 'chai';
import UdemyCrawler from '../src/crawler.es';

chai.should();


describe('Crawler:', () => {

    const SUCCESS_URL = 'udemy.com/success-life';
    const FAILURE_URL = 'https://www.udemy.com/not-existed-course';    
    let ExpectCourse;

    let expect = chai.expect;

    let crawler;

    before(() => {
        ExpectCourse = {
            id       : '1837672',
            url      : 'https://www.udemy.com/success-life/',
            title    : 'Become Successful. Personal Development - Complete Blueprint',
            headline : 'How to be successful: Personal success, Mindset, Productivity, Surrounding, Life, Habits, Success & achievement',
            image    : 'https://udemy-images.udemy.com/course/750x422/1837672_4c92_4.jpg',
            topics   : ['Personal Development', 'Personal Transformation'],

            description : "<p><strong>How to be successful. Achieve your goal and get success. Learn how to be successful. Create better habits. Be a successful person. Focus on personal development</strong></p><p><strong>Opportunities, mindset and hardwork lead to power, influence, attention, MONEY and relationships</strong></p><p><br></p><p><em>You Only Have One Life:</em> So, to have a breakthrough in <strong>YOUR</strong> happiness and emotional well being... All you have to Do is <strong>CHANGE YOUR BELIEF SYSTEM/THOUGHT PROCESS</strong></p><p>You don't know where to start? don't know what you want? Will it reach him or not? Have a fear of the future !</p><p>So, Welcome to the best course on <strong>Strategies for Success </strong>&amp; <strong>Overcome Toxic Beliefs</strong></p><p><br></p><p>The Motivation is always has that strong positive impulse but sometimes it is not enough</p><p>because some people says, \"this rich man is a lucky man\" or \"he born in a wealthy family\" or \"he has friends who help him\".. and all those unreal reasons that justify your lack of success, you say it because you can't do it like him</p><p>and this is not your fault because all what you do on every day basis and people you surround yourself with have a huge impact on your level of success.</p><p><br></p><p>However, there are certain things successful people do on every day basis that most people are simply not willing to do OR they have no idea that they should do them. Your life is ending one minute at a time and there is no point of reinventing the wheel. In this course you will learn proven strategies used by top performers and I will show you how you can implement them to be what you want and be successful</p><p><br></p><p>Make magic happen with <strong>the Law of Attraction</strong>!</p><p>This program is the result of over 30 years studying mind science and consciousness-expanding practices. You will learn how to finally identify the dis-empowering subconscious beliefs that are running your current life by default and start designing your exciting life; the life you dream of having where anything is possible. Join me on this journey of exploration and manifestation by hitting the \"Enroll Now button\" above to start learning now and I’ll see you in the course.</p>",
            audiences   : [
                "People with a curious and open mind who desire to achieve.",
                "Anyone who wants to create positive changes in life.",
                "Anyone who wants to start seeing results in his life",
                "People who are committed to improving their habits",
                "This course is for anyone wanting to live a life full of joy and wonder and want to live each day with passion",
                "Anyone who wants to improve their lives and live a better life",
                "Universe has a purpose for everybody. The one reading you, yes you are attracted here for a purpose. So yes, anybody reading this can take this course. It is developed that simple to be resourceful for everybody, keeping this fact in mind.",
                "Any student who wants to learn how to be more successful in life"
            ],

            couponCode : "",
            price      : 179.99,
            discount   : 0
        };
    });

    beforeEach(() => {
        crawler = new UdemyCrawler();
    });

    it('should query correct Udemy course info', (done) => {       

        crawler.execute(SUCCESS_URL, (err, course) => {

            course.id.should.equal(ExpectCourse.id);
            course.title.should.equal(ExpectCourse.title);
            course.headline.should.equal(ExpectCourse.headline);
            course.image.should.equal(ExpectCourse.image);
            course.description.should.equal(ExpectCourse.description);
            
            expect(course.audiences).to.have.members(ExpectCourse.audiences);
            expect(course.topics).to.have.members(ExpectCourse.topics);

            course.couponCode.should.equal(ExpectCourse.couponCode);
            course.price.should.equal(ExpectCourse.price);
            course.discount.should.equal(ExpectCourse.discount);

            
            done();
        });
    });

    it('should return Error on non-existing Udemy course', (done) => {
        crawler.execute(FAILURE_URL, (err) => {

            expect(err).to.not.be.null;
            expect(err).to.be.an.instanceof(Error);
            
            err.message.should.contains('Udemy page response with status');

            done();
        });
    });

    it('should return Error if not querying from udemy.com', (done) => {
        crawler.execute('abc.com', (err) => {
            
            expect(err).to.not.be.null;
            expect(err).to.be.an.instanceof(Error);
           
            err.message.should.contains('Invalid udemy.com');

            done();
        });
    });

    it('should return Error if querying from udemy home page', (done) => {
        crawler.execute('udemy.com', (err) => {

            expect(err).to.not.be.null;
            expect(err).to.be.an.instanceof(Error);
           
            err.message.should.contains('point to udemy.com/course-path');

            done();
        });
    });

});