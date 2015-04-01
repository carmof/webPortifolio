
define(["jquery", "app/ball.js", "app/brick.js", "app/pad.js"],
function($, Ball, Brick, Pad) {

	var Game, proto, canvasWidth, canvasHeight,
	brickWidth = 50, brickHeight = 20, ballRadius = 9, padWidth = 150, padHeight = 40, padRadius = 5;

	/*
	*       Constructors
	*/

	function makeNewGame(canvasId, canvasHgt, canvasWth) {
		var base = Object.create(proto, {
			canvas: {
		        enumerable: true,
		        configurable: true,
		        writeable: true,
		        value: $("#" + canvasId)[0]
		    },
			context: {
		        enumerable: true,
		        configurable: true,
		        writeable: true,
		        value: $("#" + canvasId)[0].getContext("2d")
		    },
		    bricks: {
		    	value: []
		    },
		    ball: {
		    	value: null
		    },
		    pad:{
		    	value: null
		    },
		    time:{
		    	value: null
		    }
		});
		return base;
	}


	/*
	*       Prototype / Instance methods
	*/

	proto = {
		startGame: function(){
			this.positionBricks(4, 10);
			this.drawBall();
			this.drawPad();
			this.loop();

		},
		drawBall: function(){

		},
		positionBricks: function(numRows, numCol){
			var brick = Brick.new(brickWidth, brickHeight, {"x": 100, "y": 100}, "rgb(0,0,0)");
			this.drawBrick(brick);
		},
		drawBrick: function(brick){
			console.log(brick);
			this.context.fillStyle = brick.color;
			console.log("this.context.fillRect("+brick.width+", "+brick.height+", "+ brick.position.x+", "+brick.position.y+");");
        	this.context.fillRect(brick.position.x, brick.position.y, brick.width, brick.height);
		},
		drawPad: function(){

		},
		loop: function(){
			console.log(this.canvas);
			console.log(this.context);
		}

	};



	// DO NOT MODIFY ANYTHING BELOW THIS LINE
	Game = {
		new: makeNewGame
	};

	Object.defineProperty(Game, "prototype", {
	value: proto,
	writable: false
	});

   return Game;

});