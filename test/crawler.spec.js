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
                '<p><strong>----------------------------------------------------------------------------------------------------------------<br><em><br>*Feb 16th 2016*</em></strong></p><ul><li><strong>Over 3100 student enrollments within the first four days of course launch!</strong></li><li><strong>Now with over 57 hours of video content and 500+ pages of curated resources!</strong></li><li><strong>11 discrete income producing trajectories!</strong></li><li><strong>Over 100 real-world mock interactions (phone calls and email templates)! </strong></li></ul><p><strong><br>Code &amp; Grow Rich is a comprehensive course that empowers both non-technical entrepreneurs and software developers with the skills to succeed in today\'s techno-centric business world. <br><br></strong><strong>-----------------------------------------------------------------------------------------------------------------</strong></p><p>Code &amp; Grow Rich will teach you how to meld technology and entrepreneurship to increase your earnings-<strong> IT WON\'T TEACH YOU HOW TO CODE. </strong></p><p>This course <strong>DOES NOT OFFER</strong> a 50,000-foot overview of archaic and disjointed pseudo-business-tomfoolery already covered ad nauseam by YouTube and Google. </p><p>This course<strong> ALSO DOESN\'T</strong> promote any get-rich-quick type of theology for the short-sighted or lazy-minded hucksters. </p><p>Code &amp; Grow Rich is a role-up-your sleeves, <strong>ACTIONABLE</strong>, and <strong>HYPER-RELEVANT </strong>framework which will enable you to effectively navigate today\'s entrepreneurial climate using technology as the building blocks for all of your ventures. </p><p><strong>HERE ARE THE OVERRIDING COURSE GOALS: </strong></p><ul><li>Assist you in <strong>Accelerating</strong> and <strong>Amplifying</strong> the <strong>Precision</strong> in which you bring startup ideas to life by seamlessly interweaving technology and entrepreneurship </li><li>Assist you in maximizing your earnings <strong>Per Every Minute of Work</strong> by melding technology and entrepreneurship </li><li>Assist you in maximizing your earnings <strong>Per Every Unit of Effort</strong> by melding technology and entrepreneurship <br> </li><li>Provide you with<strong> Multiple Earning Trajectories<br><br></strong> </li></ul><p>If you are brand-spanking new to the world of entrepreneurship and technology- no es un problemo- we\'ll get you up to speed with over 200+ income producing tactics.</p><p>In another vein, If you are an experienced programmer that is dissatisfied working for the man in a 9-5 capacity, then you\'ve likewise lucked out.</p><p>This course is uber-targeted to help you create multiple forms of <strong>Sustainable, Recurring, &amp; Minimally Invasive Passive Income</strong> through the confluence of technology and business.</p><p>Lastly, If you are an experienced serial entrepreneur, we\'ll show you how to utilize technology for your next startup idea and instruct you, in fine detail, how to efficiently scale your ideas from conception to virality.</p><p><strong>Module 1: Zero-To-Viral Techno-Centric Startup Multiplier Foundation</strong></p><p>This section is designed to teach you to THINK and EXECUTE like a technopreneur. The foundation lectures will show you how to: </p><p>Design a customized business trajectory based on your specific goals as a startup maven. <br><br>Understand how technology, relationships, and entrepreneurship dovetail together to impact your future earnings. </p><p>Optimize and objectively evaluate your communication style, level of emotional independence, and even the words that you use when interacting with prospects, clients, partners, contractors, and co-workers.</p><p>Learn how to successfully integrate, apply, and adapt core business and user growth strategies to bring your startup, software, and mobile applications to life. </p><p><strong>Module 2: Build Your Own Techno-Centric Software Startup </strong><br><br>This Section Extends and Applies What We Learned In The First Section of the Zero-Viral Module - Develop &amp; Monetize Your Own Software: Web Apps, Enterprise Software, SaaS Software, Embedded Apps, Mobile Apps, Cloud Software, and Video Games. <br></p><p>For those looking to create, market, sell, and monetize your own software and mobile applications, we\'ll give you a step-by-step process in how to do so. <br><br>Specifically we’ll cover:</p><ul><li>Mobile Applications </li><li>Web applications </li><li>Software as service applications </li><li>Enterprise applications </li><li>Embedded applications </li><li>Cloud Software </li><li>Video Games </li></ul><p><br><strong>Module 3: Client Acquisition &amp; Management | Building An Integrated Client Management Agency (this module is ginormous) </strong><br><br>Looking to land better clients, larger clients, or more clients as a solo-practitioner?<br></p><p>Looking to reduce the time and effort it takes to manage each account? </p><p>Looking to drastically increase your compensation for each and every project you work on?</p><p>Looking to potentially scale up your one-man operation to become a full-service, integrated software development agency?</p><p>Looking to increase your value by integrating more proficiencies into your client management mix? </p><p>This course will give you ALL the tools and know-how to identify, attract, acquire, manage, retain, and scale your client management operation. </p><p><strong>Module 4: Creating "Fast-Twitch" / Minimally Invasive Income Streams</strong></p><p>Minimally Invasive Recurring Income are earnings that require a minimal amount of monthly upkeep but keep going like the Energizer Bunny. </p><p>We\'ll guide you on integrating more technologies, more platforms, and more strategy to help you stabilize and grow your earnings as a technopreneur. </p><p>You’ll be able to create over 15+ passive/complementary income streams that technopreneurs can exploit right now to complement their earnings.<br><strong><br>Module 5: Generate An Absurdly High Income As A Software Consultant</strong><br></p><p>You\'ll earn more as a software consultant by:</p><ul><li><strong>Targeting</strong> the ideal clients and projects </li><li><strong>Positioning</strong> and differentiating yourself as the singular go-to industry expert </li><li><strong>Pilfering</strong> full-time positions </li></ul><p><strong><br>Module 6: Make Even More Money As An Ethical/White-Hat Hacker (Cyber Security Expert) </strong></p>Cyber-Security Expert | White-Hat Hacker<p><br>For the unconventional problem solvers out there we’ll show you the optimal ethical hacker and quality assurance paths to higher earnings.<br></p><p><em>Earn more by: </em></p><ul><li>Identifying and pitching the right cyber security and prospects</li><li>How to sell vulnerabilities, cryptography, or create your own or security software </li><li>Focus on the optimal pain points and facts to get you more deals</li><li>How to sell yourself without having a world of experience</li><li>The best tools to utilize to automate your security audits</li></ul><p><strong><br>Module 7: Create Additional Sources of Income by Integrating Software and Hardware </strong></p><p>Learn to apply and monetize your coding skills with Arduino and Raspberry Pi platforms. </p><p><em>Earn more by:</em></p><ul><li>Quickly getting up to speed with Arduino &amp; Raspberry Pi basics.</li><li>Learning which products make money, and which tend to fail. </li><li>Uncovering the most profitable niches to attack. </li><li>Identifying, qualifying, and negotiating with a hardware manufacturer.</li><li>Discovering key differences between Raspberry Pi &amp; Arduino money making trajectories.</li></ul><p><span></span></p><strong><p><strong><br></strong></p><p><strong>Module 8: Successfully Maneuver Your Way to Your IDEAL Full-Time Job &amp; Maximize Your Compensation Package - Sell out to "The-Man" with a smile</strong></p></strong><p>For those intrapreneurs that are more comfortable sticking with full-time employment, we\'ll show you how to increase your compensation and value by merging techno-centric proficiencies and platforms into your current role.</p><p>If you are fed up with your current job, and are looking to upgrade to a new, higher paying position, we\'ll assist you in hacking the job search process and show you how to best position yourself for the top-paying roles. </p><p>We’ll provide you with a full array of negotiating strategies to maximize your aggregate compensation package. Remember, you will also have the freedom to continue working 9-5 while you utilize techniques from this course to generate additional passive income- you don’t need to quit your job in order to implement our strategies. How to position yourself as an integrated problem solver.</p>How to best align your online assets (portfolio, blog, case studies) to maximize your perceived value. How to refine the way you interact and communicate to demonstrate even more value. The right way to ask for a raise. <br><strong><br>Module 9: Generate Side Income by becoming a PASSIVE Technology Instructor </strong><p><br>Make More Money As A Technology Instructor. In one of the funner parts of this course we\'ll show you how to generate even more PASSIVE income by creating and selling your own technology courses online and in the real world. Some technology instructors that upload their little classes to the interwebs make over a million bucks a year- we\'ll show you how. We\'ll even show you how to transition your courses into a full-fledged coding school. <br><br><em>You’ll earn more money by learning:</em><br></p><ul><li>Which platforms to launch your course on </li><li>Which instructors make the most coin and why </li><li>What niches are the most profitable </li><li>Timing your course launch </li><li>Using kickstarter, facebook, adwords, twitter, bloggers, and journalists to ignite pre-launch virality </li><li>Optimal pricing strategies for your courses </li><li>How to grow an audience and upsell students </li><li>The 4 tenets of an extraordinary learning experience </li><li>How to best create disruptive educational value </li><li>Critical student data to track </li><li>Perpetual vs. discrete student growth tactics </li><li>The best equipment to use when creating your courses</li><li>Partnerships, bundling, &amp; co-creating courses</li></ul><p><strong><br></strong></p><p><strong>Module 10: Blend Coding, Creativity, and Marketing Savvy to become a Growth Hacker - Use Growth Hacking Techniques to Quickly Scale Your Ideas</strong> </p><p>For those with an affinity towards technology &amp; marketing - we\'ll show you how to land high paying gigs as a much sought-after growth hacker.</p><p><em>You’ll earn more as a growth hacker by understanding: </em></p><ul><li>Why a growth hacking skillset is in such high demand</li><li>Growth hacking misconceptions</li><li>How to best interweave creativity, marketing, data, and technology</li><li>How to use growth hacking techniques to scale your startup</li><li>How to use growth hacking strategies to expedite product virality</li><li>How to use growth hacking to increase industry buzz</li><li>The 5-Stages &amp; 8-Steps to growth hacking success</li><li>How to create growth hacks of your own</li><li>How to micro-test to validate your hacks</li><li>How growth hacking in practice (Dropbox, AirBnB, Linkedin, Slack) can create a massive user base</li><li>How to land or poach growth hacking gigs</li><li>How to best interact as a growth hacker</li></ul><p><br><strong>Module 11: Insulating Yourself From Obsolescence | Investing in Your Future</strong> <br></p><p>We\'ll give you both the tools and understanding to best arm and protect you from changes in technology. You’ll be able to position yourself for maximum future earnings as technology continues to evolve. You\'ll learn: </p><ul><li>Which technologies and platforms are trending now </li><li>What is the world of technology evolving towards </li><li>How and where to bet on your future </li><li>How user-focus will continue to drive growth</li></ul><p><strong><br>========================================================================</strong></p><p><strong></strong></p><p><strong>How this course will help you to achieve your goals:</strong></p><p>Heavy emphasis on <strong>ACTIONABLE INITIATIVES </strong>to go along with the conceptual learning. Not a lot of pie-in-the-sky philosophy, you will be able to put your learning into <strong>IMMEDIATE MOTION.</strong></p><p><strong>YOU\'ll ALSO BE LEARNING FASTER:</strong></p><p>This course will have extremely limited anecdotal fodder. I will not drown you in long-winded, irrelevant narrative.</p><p>Course information is presented through distinct learning tracks. These tracks are based on your specific starting point and goals as a developer or agency. You will be able to efficiently ingest the information that you find most important for your future.</p><p>Critical information in both lectures and sections are delivered and summarized in speed-learning "hack" sections. Hack sections will allow you to bypass the granular details if you are absolutely pressed for time.<br><br><strong>========================================================================</strong><br><strong><br>Who Should Take This Course?</strong><br></p><p>Code &amp; Grow Rich provides the most value for these eight audiences, <strong>before wasting any time and money by purchasing this course, make sure you fall within at least one of these categories</strong>:</p><p>1) Both Non-Technical Entrepreneurs &amp; Techno-Savvy Startup Junkies <br></p><p>Both new and experienced <strong>ENTREPRENEURS, STARTUP JUNKIES, &amp; NON-TECHNICAL INDIVIDUALS</strong>, who want to fully understand how to best harness and integrate technology to make a killing developing and scaling their own businesses. </p><p>For entrepreneurs, you’ll be provided with both a complete technical foundation as well as the optimal trajectory to successfully create and scale <strong>ALL</strong> of your future business ideas. You won’t just understand more about software, you will <strong>ACTIVELY BE ABLE </strong>to <strong>FRAME</strong> technology as the centerpiece of your next startup launches. </p><p>If you are an entrepreneur that absolutely refuses to ever touch a line of code, we’ll show you the best ways to nurture your ideas by utilizing automated software development tools or by partnering up with current software developers. </p><p>2) Both Newbie Coders &amp; Experienced Programmers </p><p>This course infuses programmers with<strong> ENTREPRENEURIAL KNOW-HOW </strong>and an <strong>ACTIONABLE GAME-PLAN</strong> to dominate any business niche or grow a client-management software agency- programmers will learn how to weave technical concepts together with marketing, sales, growth-hacking, psychology, effective communication, and strategy to out-pace, out-smart, and out-maneuver the competition to turn their techno-centric ideas into profitable businesses. </p><p>Brand new <strong>Coders</strong> and experienced <strong>SOFTWARE PROGRAMMERS / WEB &amp; MOBILE APP DEVELOPERS / SOFTWARE ENGINEERS / FREELANCE DEVELOPERS </strong>who want to better utilize their technological curiosity and expertise to make Minimally Invasive Passive Income (income which only requires a limited amount of hand-holding and upkeep) will be shown the blueprint to do so. </p><p>3) 9-5 Workers Looking For More | Career Enhancers &amp; Intrapreneurs | Career Switchers <br></p><p>If you feel under-appreciated, under-utilized, micro-managed, under-paid or just plain unfulfilled in your 9-5 work, this course will empower you to “level-up” and land a better, more lucrative and fulfilling technology focused position.</p><p>If you are not sold on your current career and are looking to explore new paths centered around technology and software, this course will provide you with a hands-on foundation to successfully transition to almost <strong>ANY</strong> techno-centric field. </p><p>If you are looking to add more value to your existing position or company by adding proficiencies with new platforms, technologies, this course will enable you to do so. </p><p>4) Current Students </p><p>If you are a technically oriented computer science, information technology, or business administration student looking to find an effective way to pay off your student loans WHILE STILL IN SCHOOL, we’ll show you how to do so. </p><p>If you are a non-technical or business major- liberal arts, philosophy, architecture (it doesn’t really matter) we will show you how to break into the startup world and launch your own businesses without any preexisting technical expertise. </p><p>If you are dreaming of becoming the next Evan Spiegel or Mark Zuckerberg then you’ll find this course immensely relevant.<br><br>5) Underachievers That Have Failed To Launch | Full-Time Netflix/Game of Throne’s Addicts. <br><br>If you are: </p><ul><li>35 years-old and still living in your parents’ basement (lights out at 10:30 PM)</li><li>Cleaning up monkey dung at the town zoo </li><li>Spending more time playing Grand Theft Auto &amp; Halo than sleeping</li></ul><p><br></p><p><span></span>6) Introverts or The Socially Challenged<br></p><p>If you\'ve ever been described as shy or a nerd/geek and fear that entrepreneurship is just not for you, we\'ll show you how to best break out of that shell so you can get transacting. This course includes over 100 mock phone and email interactions to guide you on the best ways to develop relationships with your peers, clients, co-workers, and partners.</p><p>7) The Highly Motivated That Lack The Raw Business Ideas/Concepts <br><br>Even if you don\'t have any new business ideas whatsoever we’ll provide you with over a dozen techno-centric concepts that are just waiting to be brought to life. </p><p>8) Parents (makes a ridiculously good gift for the entrepreneur or developer in your family) <br><br>If jr. or jr. miss is still wavering about a career choice or if the thought of your child saddling themselves with massive college loans is unappealing, this course is the perfect opportunity to invest in something that will actually have a practical impact on your child’s financial future.<br><br><strong>========================================================================</strong><br><br>So, sign up now, and I\'ll see you on the inside!<br><br></p>',
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
                'content management system (CMS) developers and enterprise resource planning (ERP) experts ',
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
            course.description.should.equal(ExpectCourse.description);

            expect(course.audiences).to.have.members(ExpectCourse.audiences);
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
