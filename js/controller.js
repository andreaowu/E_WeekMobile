/* Major List Controller */

eweekApp.controller('MajorListCtrl', function ($scope) {
	$scope.majors = [
		{"name": "BioEngineering",
			"event-scores": [
				{"event":"Engineering Showcase", "event-score":30},
				{"event":"Puzzle Hunt", "event-score":30},
				{"event":"Design & Build", "event-sc/re":30},
				{"event":"Carnival", "event-score":30},
				{"event":"Duct Tape Competition", "event-score":30},
				{"event":"E4K", "event-score":30},
				{"event":"Box Tops", "event-score":30},
				{"event":"Most Spirited Major", "event-score":30}
			],
			"score": 212.29},
		{"name": "Chemical Engineering",
			"event-scores": [
				{"event":"Engineering Showcase", "event-score":100},
				{"event":"Puzzle Hunt", "event-score":40},
				{"event":"Design & Build", "event-score":70},
				{"event":"Carnival", "event-score":10},
				{"event":"Duct Tape Competition", "event-score":80},
				{"event":"E4K", "event-score":400},
				{"event":"Box Tops", "event-score":80},
				{"event":"Most Spirited Major", "event-score":1000}
			],
			"score": 135.84},
		{"name": "Civil Engineering",
			"event-scores": [
				{"event":"Engineering Showcase", "event-score":30},
				{"event":"Puzzle Hunt", "event-score":30},
				{"event":"Design & Build", "event-score":30},
				{"event":"Carnival", "event-score":30},
				{"event":"Duct Tape Competition", "event-score":30},
				{"event":"E4K", "event-score":30},
				{"event":"Box Tops", "event-score":30},
				{"event":"Most Spirited Major", "event-score":30}
			],
			"score": 217.17},
		{"name": "Computer Science (L&S)",
			"event-scores": [
				{"event":"Engineering Showcase", "event-score":30},
				{"event":"Puzzle Hunt", "event-score":30},
				{"event":"Design & Build", "event-score":30},
				{"event":"Carnival", "event-score":30},
				{"event":"Duct Tape Competition", "event-score":30},
				{"event":"E4K", "event-score":30},
				{"event":"Box Tops", "event-score":30},
				{"event":"Most Spirited Major", "event-score":30}
			],
			"score": 0},
		{"name": "EECS",
			"event-scores": [
				{"event":"Engineering Showcase", "event-score":30},
				{"event":"Puzzle Hunt", "event-score":30},
				{"event":"Design & Build", "event-score":30},
				{"event":"Carnival", "event-score":30},
				{"event":"Duct Tape Competition", "event-score":30},
				{"event":"E4K", "event-score":30},
				{"event":"Box Tops", "event-score":30},
				{"event":"Most Spirited Major", "event-score":30}
			],
			"score": 494.55},
		{"name": "Engineering Sciences",
			"event-scores": [
				{"event":"Engineering Showcase", "event-score":30},
				{"event":"Puzzle Hunt", "event-score":30},
				{"event":"Design & Build", "event-score":30},
				{"event":"Carnival", "event-score":30},
				{"event":"Duct Tape Competition", "event-score":30},
				{"event":"E4K", "event-score":30},
				{"event":"Box Tops", "event-score":30},
				{"event":"Most Spirited Major", "event-score":30}
			],
			"score": 89.94},
		{"name": "IEOR",
			"event-scores": [
				{"event":"Engineering Showcase", "event-score":30},
				{"event":"Puzzle Hunt", "event-score":30},
				{"event":"Design & Build", "event-score":30},
				{"event":"Carnival", "event-score":30},
				{"event":"Duct Tape Competition", "event-score":30},
				{"event":"E4K", "event-score":30},
				{"event":"Box Tops", "event-score":30},
				{"event":"Most Spirited Major", "event-score":30}
			],
			"score": 474.76},
		{"name": "Materials Science and Eng.",
			"event-scores": [
				{"event":"Engineering Showcase", "event-score":30},
				{"event":"Puzzle Hunt", "event-score":30},
				{"event":"Design & Build", "event-score":30},
				{"event":"Carnival", "event-score":30},
				{"event":"Duct Tape Competition", "event-score":30},
				{"event":"E4K", "event-score":30},
				{"event":"Box Tops", "event-score":30},
				{"event":"Most Spirited Major", "event-score":30}
			],
			"score": 30.93},
		{"name": "Mechanical Engineering",
			"event-scores": [
				{"event":"Engineering Showcase", "event-score":30},
				{"event":"Puzzle Hunt", "event-score":30},
				{"event":"Design & Build", "event-score":30},
				{"event":"Carnival", "event-score":30},
				{"event":"Duct Tape Competition", "event-score":30},
				{"event":"E4K", "event-score":30},
				{"event":"Box Tops", "event-score":30},
				{"event":"Most Spirited Major", "event-score":30}
			],
			"score": 442.58},
		{"name": "Nuclear Engineering",
			"event-scores": [
				{"event":"Engineering Showcase", "event-score":30},
				{"event":"Puzzle Hunt", "event-score":30},
				{"event":"Design & Build", "event-score":30},
				{"event":"Carnival", "event-score":30},
				{"event":"Duct Tape Competition", "event-score":30},
				{"event":"E4K", "event-score":30},
				{"event":"Box Tops", "event-score":30},
				{"event":"Most Spirited Major", "event-score":30}
			],
			"score": 3.9},
	];

	$scope.orderProp = '-score';
	$scope.limitNum = 9;

	var seeAll = false;

	$scope.shrinkExpand = function(seeAll) {

		if(seeAll == true) {
			$scope.limitNum = 5;
			$scope.leaderboardShrink = "See all majors.";
			seeAll = false;
			console.log(seeAll);
		}
		else {
			$scope.limitNum = 20;
			$scope.leaderboardShrink = "See only top 5.";
			seeAll = true;
			console.log(seeAll);
		}
	}
});


/* Events Controller */

eweekApp.controller('EventListCtrl', function($scope, $routeParams) {
	$scope.events = [
		{"name": "Networking",
			"day": "Wednesday",
			"dateTime":"3/12, 7-9 PM",
			"location": "Kvamme Atrium",
			"description": "Come meet industry professionals and talk to them about their professional experiences. A variety of different engineering companies will be here: Boeing, Stryker, Berkeley BioLabs, Palo Alto Networks, Adap.tv, Chevron, and Samsung. Hor d'oeuvres will be served!",
			"tag": "Professional Development",
			"imgUrl": "img/networking.png"},
		{"name": "Milk and Cookies",
			"day": "Monday",
			"dateTime":"3/11, 12-2 PM",
			"location": "Bechtel Terrace",
			"description": "Start off E-Week by grabbing some milk and cookies and socializing with your fellow engineers at the Bechtel Terrace (right outside the ESS office). We will have an assortment of different cookies and they're free so be sure to stop by!",
			"tag": "Meet & Eat",
			"imgUrl": "img/milk.png"},
		{"name": "Engineering Showcase",
			"day": "Monday",
			"dateTime":"3/12, 6-8 PM",
			"location": "Hearst Mining Building",
			"description": "The engineering showcase is a chance for all clubs to show off the projects and devices that they have been working on. Located directly outside and after the kickoff event, each group will be set up to show you their work, so come check out what our Berkeley engineers have been building!",
			"tag": "Meet & Eat",
			"imgUrl": "img/showcase.png"},
		{"name": "Breakfast",
			"day": "Tuesday, Wednesday",
			"dateTime":"3/12, 9-11 AM",
			"location": "ESS Patio",
			"description": "Free bagels (while supplies last) for engineers to fuel your brain and celebrate E-Week! Find us in front of the ESS!",
			"tag": "Meet & Eat",
			"imgUrl": "img/breakfast.png"},
		{"name": "Carnival",
			"day": "Friday",
			"dateTime":"3/14, 2-4 PM",
			"location": "Bechtel Terrace",
			"description": "The annual E-week carnival is one of the most highly anticipated events of the week! The carnival will feature, snacks, music, games, and of course lots and lots of pie. This event is a fun way to see what different clubs do and for you to meet fellow engineers outside an academic setting.",
			"tag": "Meet & Eat",
			"imgUrl": "img/carnival.png"},
		{"name": "Casino Night",
			"day": "Friday",
			"dateTime":"3/14, 6-8 PM",
			"location": "290 Hearst Mining",
			"description": "Never been to a casino? This is your chance! There will be multiple tables set up for poker, roulette, pai gao, and more, with professional card dealers. There will also be entertainment, including a magic act. Dress to impress!",
			"tag": "Meet & Eat",
			"imgUrl": "img/casino.png"},
		{"name": "Dean Drako Kickoff",
			"day": "Monday",
			"dateTime":"3/10, 5-6 PM",
			"location": "Hearst Mining",
			"description": "Keynote Dean Drako will draw from his experience in founding and building 6 technology start-up companies, including his recent companies: Barracuda Networks - November 2013 IPO; IC Manage - a Deloitte Fast500 company; and Eagle Eye Networks - launched in January 2014.  Drako will share some of his techniques and pitfalls to avoid, to help you successfully build a strong technology company with sustainable growth.",
			"tag": "Speakers",
			"imgUrl": "img/keynote.png"},
		{"name": "Innovations in Engineering - Berkeley BioLabs",
			"day": "Tuesday",
			"dateTime":"3/11, 7-8 PM",
			"location": "Hearst Mining Building",
			"description": "Come to an inspiring talk by Ryan Bethencourt and Ron Shigeta and hear about their experiences as engineers and entrepreneurs in their latest business venture, Berkeley BioLabs. Learn about some different perspectives of starting a successful start-up company and consider how you can innovate the next big idea. Refreshments will be provided.",
			"tag": "Speakers",
			"imgUrl": "img/keynote.png"},
		{"name": "Innovations in Engineering - Boeing",
			"day": "Thursday",
			"dateTime":"3/13, 7:30-8:30 PM",
			"location": "Banatao Auditorium",
			"description": "A Boeing representative for 30 years, Mike O'Grady is a senior technical engineer.  Past positions covered propulsion systems, stress analysis, and structural materials development.  Mike has manages the Knowledge Based Engineering organization at Boeing, responsible for developing tools that can cover cognitive routine work.",
			"tag": "Speakers",
			"imgUrl": "img/keynote.png"},
		{"name": "Interdepartamental Competition",
			"day": "Every day!",
			"dateTime":"All day!",
			"location": "Everywhere!",
			"description": "Which major is the best? Come to all the events! All competition scores count of course, as does participation in showcasing, holding a booth at the carnival, turning in Box Tops, having overall team spirit (cheering, best pickup line flawlessly delivered to an event coordinator), and volunteering at any of the events.  At the end your department will win a trophy, so make sure you come out to all the events and root for your department!",
			"tag": "Compete",
			"imgUrl": "img/compete.png"},
		{"name": "Puzzle Hunt",
			"day": "Tuesday",
			"dateTime":"3/11, 3-7 PM",
			"location": "Hearst Mining Circle, show to Bechtel 120AB if you're coming after 3:30PM",
			"description": "Enjoy solving puzzles? Come join the puzzle hunt! Form teams and walk (or run) around campus using your bright engineering minds to solve puzzles. Make sure you wear comfortable clothes and shoes. Fastest team of five to finish the puzzles wins a $150 giftcard! Awards ceremony and dinner served afterward. (If you can't stay the entire time or have to come late, don't worry! You can come join whenever you're free.)",
			"tag": "Compete",
			"imgUrl": "img/puzzle.png"},
		{"name": "Design & Build",
			"day": "Thursday",
			"dateTime":"3/13, 4-7 PM",
			"location": "Bechtel 120AB",
			"description": "Put your engineering skills to the test! Engineering students will form teams and face off to overcome a unique design challenge to do some hands-on building! Competition details will be released at the beginning of the event. Dinner will be served!",
			"tag": "Compete",
			"imgUrl": "img/design.png"},
		{"name": "Duct Taping",
			"day": "Thursday",
			"dateTime":"3/13, 3-4 PM",
			"location": "Wurster North Wall",
			"description": "As an interdepartmental competition, each group will work to duct tape one member of their team to a wall as quickly as possible. Members will have to answer trivia questions in order to receive more tape, as each group will only be given a limited initial amount. Snacks will be provided and there will be people stuck on walls so be sure to stop by!",
			"tag": "Compete",
			"imgUrl": "img/ducttape.png"},
		{"name": "Engineering For Kids",
			"day": "Saturday",
			"dateTime":"3/15, 9 AM - 3 PM",
			"location": "Engineering Buildings",
			"description": "As part of Engineers Week, Engineering For Kids is an annual event during which we invite elementary school children from around the area to come to campus to engage in activities hosted by our own UC Berkeley engineering societies. Volunteers are always welcome the day of the event. We will need help setting up, making sure kids and their chaperones stay in designated areas, and cleaning up. If you're interested, please do come help us!",
			"tag": "Outreach",
			"imgUrl": "img/kids.png"}
	];

	$scope.eventTags = [
		{"name": "Speakers",
			"imgUrl": "img/speaker.png",
			"link": "speaker"},
		{"name": "Compete",
			"imgUrl": "img/compete.png",
			"link": "compete"},
		{"name": "Meet & Eat",
			"imgUrl": "img/meet.png",
			"link": "meetEat"},
		{"name": "Professional Development", 
			"imgUrl": "img/profdev.png",
			"link": "prodev"},
		{"name": "Outreach",
			"imgUrl": "img/outreach.png",
			"link": "outreach"},
		{"name": "Monday",
			"imgUrl": "img/monday.png",
			"link": "monday"},
		{"name": "Tuesday",
			"imgUrl": "img/tuesday.png",
			"link": "tuesday"},
		{"name": "Wednesday",
			"imgUrl": "img/wednesday.png",
			"link": "wednesday"},
		{"name": "Thursday",
			"imgUrl": "img/thursday.png",
			"link": "thursday"},
		{"name": "Friday",
			"imgUrl": "img/friday.png",
			"link": "friday"},
		{"name": "Saturday",
			"imgUrl": "img/saturday.png",
			"link": "saturday"}];


	$scope.limit = 5;
	$scope.customFilter = $routeParams.filter;
});

eweekApp.controller('msgController', function($scope,$routeParams) {

	$scope.message = 'Hello';

});
