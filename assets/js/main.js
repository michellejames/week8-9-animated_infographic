console.log("Hello World from main.js!");

// Section 1

TweenMax.to(".sun1" , 10000000, {rotation:"100000000" , repeat:-1});
TweenMax.to(".clouds-white", 2, {left: 15, yoyo: true, repeat: -1});
TweenMax.to(".clouds-dark", 5, {top: 10, yoyo: true, repeat: -1})
TweenMax.from("h1", 3, {scale: .1});


// Section 2

TweenMax.to(".early-birds-section h2", 2, {rotation: 360});
TweenMax.from(".night-owls-section h2", 4, {scale: .1});

var earlyBirdOwl = new Waypoint({
	element: document.querySelector(".early-birds-section h3"),
	handler: function(direction){

		TweenMax.from(".early-birds-section h3", 2, {rotation: "-90", transformOrigin: "10px", overwrite:"false"});
		TweenMax.from(".night-owls-section h3", 2, {rotation: "90", transformOrigin: "100px", overwrite:"false"});

		TweenMax.from(".list-item5", 2.5,{top:"-100px", opacity:"0", overwrite:"none"});
		TweenMax.from(".list-item6", 2.5,{top:"-100px", opacity:"0", overwrite:"none"});
		TweenMax.from(".list-item7", 2.5,{top:"-100px", opacity:"0", overwrite:"none"});
		TweenMax.from(".list-item8", 2.5,{top:"-100px", opacity:"0", overwrite:"none"});
		TweenMax.from(".list-item9", 2.5,{top:"-100px", opacity:"0", overwrite:"none"});
		TweenMax.from(".list-item10", 2.5,{top:"-100px", opacity:"0", overwrite:"none"});
		TweenMax.from(".list-item11", 2.5,{top:"-100px", opacity:"0", overwrite:"none"});
		this.destroy()
	},
	offset: '75%'
});

TweenMax.to(".sun4" , 3, {rotation:"15" , repeat:-1, yoyo: true});
TweenMax.to(".moon", 3, {opacity: 1, top: "15px", repeat: -1, yoyo: true});
TweenMax.to(".vs", 3, {scale: 1.5, repeat: -1, yoyo: true});

TweenMax.to(".clouds-dark4", 1, {left: 8, yoyo: true, repeat: -1});
TweenMax.to(".clouds-white4", 2, {left: 2, yoyo: true, repeat: -1});
TweenMax.to(".dark-cloud", 1, {top: 8, yoyo: true, repeat: -1});

TweenMax.to(".bird", .3, {top: "1px", repeat: -1, yoyo: true});
TweenMax.to(".owl", 5, {delay: 1, top: 2, right: 20, repeat: -1, yoyo: true});
TweenMax.to(".tree-left", 3, {width: "50%"});
TweenMax.to(".tree-right", 5, {width: "50%"});
TweenMax.to(".dark-background", 4, {opacity: 1});

var duoCity = new Waypoint({
	element: document.querySelector('.duo-city'),
	handler: function(direction){
		TweenMax.from(".duo-city", 1, {backgroundPosition:"0 20em"});
		this.destroy()
	},
	offset: "75%",
});

// Section 3
TweenMax.from(".main h2", 2, {scale: 1.7});

TweenMax.to(".sun2" , 4, {scale: 1.4, repeat: -1, yoyo: true});
TweenMax.to(".clouds-white2", 2, {right: 5, yoyo: true, repeat: -1});
TweenMax.to(".clouds-dark2", 5, {top: 20, yoyo: true, repeat: -1})

TweenMax.fromTo(".bell-left1", .001, {rotationZ: "-10deg", repeat: -1, yoyo: true}, {rotationZ: "10deg", repeat: -1, yoyo: true});
TweenMax.fromTo(".bell-right1", .001, {rotationZ: "-10deg", repeat: -1, yoyo: true}, {rotationZ: "10deg", repeat: -1, yoyo: true});

TweenMax.fromTo(".alarm-move-left1-1", .1, {rotationZ: "-10deg", repeat: -1, yoyo: true}, {rotationZ: "10deg", repeat: -1, yoyo: true});
TweenMax.fromTo(".alarm-move-left2-1", .1, {rotationZ: "-10deg", repeat: -1, yoyo: true}, {rotationZ: "10deg", repeat: -1, yoyo: true});

TweenMax.fromTo(".alarm-move-right1-1", .1, {rotationZ: "-10deg", repeat: -1, yoyo: true}, {rotationZ: "10deg", repeat: -1, yoyo: true});
TweenMax.fromTo(".alarm-move-right2-1", .1, {rotationZ: "-10deg", repeat: -1, yoyo: true}, {rotationZ: "10deg", repeat: -1, yoyo: true});

TweenMax.to (".large-clock-hand1", 8, {rotation: 360, transformOrigin:"bottom center", repeat: -1, ease: Power2.easeInOut,});

TweenMax.to(".thin-red-line5", 2, {delay: 2, width: "42.82700422%", repeat: -1, yoyo: true});
TweenMax.to(".thin-red-line6", 2, {delay: 2, width: "0", opacity: 1, repeat: -1, yoyo: true});


TweenMax.to(".list-item1", .8 , {top:"23%", yoyo: true, repeat: -1, ease:Back.easeIn});
TweenMax.to(".list-item2", .8 , {top:"23%", yoyo: true, repeat: -1, ease:Back.easeIn});
TweenMax.to(".list-dot3", .8 , {top:"60%", yoyo: true, repeat: -1, ease:Back.easeIn});
TweenMax.to(".reason-snooze-off3", .8 , {top:"60%", yoyo: true, repeat: -1, ease:Back.easeIn});
TweenMax.to(".list-item3", .8 , {top:"36%", yoyo: true, repeat: -1, ease:Back.easeIn});

var smallGallery = new Waypoint({
	element: document.querySelector(".small-gallery"),
	handler: function(direction){
		TweenMax.from(".rem-img-1", 1, {scale:"0", ease:Back.easeNone});
		TweenMax.from(".small-gallery span", 2.5,{top:"-100px", opacity:"0"});
		TweenMax.from(".city-blue1", 1, {backgroundPosition:"0 20em"});
		this.destroy()
	},
	offset: "75%"
});

TweenMax.to(".exclamation-point", 1, {scale: 2, repeat: -1, yoyo: true});


// Section 4

var tenThings = new Waypoint({
	element: document.querySelector(".ten-things"),
	handler: function(direction){
		TweenMax.from(".ten-things h2", 3, {scale: .1});
		this.destroy()
	},
	offset: "75%"
});


TweenMax.to(".sun3" , 4, {scale: 1.4, repeat: -1, yoyo: true});
TweenMax.to(".clouds-white3", 2, {right: 5, yoyo: true, repeat: -1});
TweenMax.to(".clouds-dark3", 5, {top: 10, yoyo: true, repeat: -1})


var firstRow = new Waypoint({
	element: document.querySelector('.to-do'),
	handler: function(direction){
		TweenMax.from(".img1", 2, {opacity: 0, rotation: 360, transformOrigin: "20px 400px"});
		TweenMax.from(".img2", 2, {opacity: 0, rotation: 360, transformOrigin: "20px 400px"});
		TweenMax.from(".img3", 2, {opacity: 0, rotation: 360, transformOrigin: "20px 400px"});
		TweenMax.from(".img4", 2, {opacity: 0, rotation: 360, transformOrigin: "20px 400px"});
		TweenMax.from(".img5", 2, {opacity: 0, rotation: 360, transformOrigin: "20px 400px"});
		TweenMax.from(".img6", 2, {opacity: 0, rotation: 360, transformOrigin: "20px 400px"});
		TweenMax.from(".img7", 2, {opacity: 0, rotation: 360, transformOrigin: "20px 400px"});
		TweenMax.from(".img8", 2, {opacity: 0, rotation: 360, transformOrigin: "20px 400px"});
		TweenMax.from(".img9", 2, {opacity: 0, rotation: 360, transformOrigin: "20px 400px"});
		TweenMax.from(".img10", 2, {opacity: 0, rotation: 360, transformOrigin: "20px 400px"});
		this.destroy()
	},
	offset: "25%"
});

var secondRow = new Waypoint({
	element: document.querySelector(".to-do"),
	handler: function(direction){
		TweenMax.from(".ten1", 2.5,{top:"-100px", opacity:"0"});
		TweenMax.from(".ten2", 2.5,{top:"-100px", opacity:"0"});
		TweenMax.from(".ten3", 2.5,{top:"-100px", opacity:"0"});
		TweenMax.from(".ten4", 2.5,{top:"-100px", opacity:"0"});
		TweenMax.from(".ten5", 2.5,{top:"-100px", opacity:"0"});
		TweenMax.from(".ten6", 2.5,{top:"-100px", opacity:"0"});
		TweenMax.from(".ten7", 2.5,{top:"-100px", opacity:"0"});
		TweenMax.from(".ten8", 2.5,{top:"-100px", opacity:"0"});
		TweenMax.from(".ten9", 2.5,{top:"-100px", opacity:"0"});
		TweenMax.from(".ten10", 2.5,{top:"-100px", opacity:"0"});

		TweenMax.to(".muscle1", .7, {delay: 2, opacity: 1, top: "-5px", backgroundColor: "#FFF", repeat: -1, yoyo: true});
		TweenMax.to(".muscle2", .7, {delay: 2, opacity: 1, top: "-7px", backgroundColor: "#FFF", repeat: -1, yoyo: true});
		TweenMax.to(".muscle3", .7, {delay: 2, opacity: 1, top: "-5px", backgroundColor: "#FFF", repeat: -1, yoyo: true});

		TweenMax.from(".checklist", 3, {delay: 3, opacity: 0, scale: .1});
		this.destroy()
	},
	offset: "50%"
});

TweenMax.to(".prio1", 2, {scale: 3, color: "#D54346", repeat: -1, yoyo: true} );
TweenMax.to(".bubble", 2, {delay: 5, scale: 1.2, repeat: -1, yoyo: true});
TweenMax.to(".fake-news", 2, {delay: 2, opacity: 1, scale: 2, repeat: -1, yoyo: true} );


