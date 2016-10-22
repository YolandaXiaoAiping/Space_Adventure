/*first load the page*/
$(document).ready(
	function(){
		/*show the start_page*/
		//$("#myCanvas").show();
		$("#myCanvas").hide();
		//$("#start_page").hide();
		//$("#mCanvas").hide();//hide the canvas page*/
		$("#game_page").hide();//hide the game page*/
		$("#start_button").click(
			function(){
				//hide the start page
				$("#start_page").hide();
				$("canvas").show();
				//$("#game_page").show();
				checkTime = setInterval(countDown,1000);
			}
		);
		
	}
);

/*canvas*/
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

/*draw the level text*/
var level = 1;

/*draw score*/
var score = 200;

/*draw button*/
var game_button = "Pause";

/*draw the timer*/
var Time = 60;
var checkTime;

var score = 200;
var planetNum = 10;

function createCanvas(){
	//clear the context
	context.clearRect(0,0,canvas.width,40);
	/*draw the border*/
	context.beginPath();
	context.lineWidth = "4";
	context.strokeStyle = "black";
	context.lineTo(0,40);
	context.lineTo(1000,40);
	context.stroke();
	//level;
	context.font = 'italic 20pt Calibri';
	context.fillText("Level # "+level.toString(),20,25);
	//score
	context.font = 'italic 20pt Calibri';
	context.fillText("Score: "+score.toString(),500,25);
	//timer
	context.font = 'italic 20pt Calibri';
	context.fillText(Time+" seconds",859,28);
	
}

/*moon*/
var moon = {
	x : 0,
	y : 0,
	tx : 0,
	ty : 0,
	setLocation:function(x,y){
		this.x = x;
		this.y = y;
	},
	draw:function(){
		context.save();
		context.translate(this.x,this.y);
		//moon outer circle
		context.beginPath();
		context.fillStyle = "black";
		
		context.arc(0,0,25,0*Math.PI,1.5*Math.PI);
		context.moveTo(0,-25);
		context.bezierCurveTo(-30,-30,20,20,25,0);
		/*
		ctx.moveTo(10,8);
		ctx.quadraticCurveTo(-30,25,10,42);
		ctx.quadraticCurveTo(-5,25,10,8);
		*/
		context.fill();
		context.stroke();
		
		context.restore();
		
	}
	
};
/*satellite*/
var satellite ={
	x:0,
	y:0,
	tx:0,
	ty:0,
	setLocation:function(x,y){
		this.x = x;
		this.y = y;
	},
	draw:function(){
		context.save();
		context.translate(this.x,this.y);
		context.translate(0,25);
		context.rotate(-45/180*Math.PI);
		context.translate(0, -25);
		//satellite body
		context.beginPath();
		context.fillStyle="black";
		context.rect(0,0,6,15);
		context.fill();
		context.stroke();
		//head
		context.beginPath();
		context.moveTo(3,0);
		context.lineTo(3,-7);
		context.lineWidth=2;
		context.stroke();
		//round head
		context.beginPath();
		context.fillStyle="black";
		context.arc(3,-9,2,0,2*Math.PI);
		context.fill();
		context.stroke();
		//two lines
		context.beginPath();
		context.moveTo(0,3);
		context.lineTo(-5,3);
		context.lineWidth=2;
		context.stroke();
		context.beginPath();
		context.moveTo(6,3);
		context.lineTo(11,3);
		context.lineWidth=2;
		context.stroke();
		//wings
		context.beginPath();
		context.fillStyle="black";
		context.rect(11,0,25,8);
		context.fill();
		context.stroke();
		context.beginPath();
		context.fillStyle="black";
		context.rect(-30,0,25,8);
		context.fill();
		context.stroke();
		//signal
		context.beginPath();
		context.arc(3,-9,6,Math.PI,0);
		context.lineWidth=1;
		context.stroke();
		context.beginPath();
		context.arc(3,-9,10,Math.PI,0);
		context.lineWidth=1;
		context.stroke();
		context.beginPath();
		context.arc(3,-9,15,Math.PI,0);
		context.lineWidth=1;
		context.stroke();
		
		context.restore();
		
		
	}
};

/*satellite2*/
var satellite2 ={
	x:0,
	y:0,
	tx:0,
	ty:0,
	setLocation:function(x,y){
		this.x = x;
		this.y = y;
	},
	draw:function(){
		context.save();
		context.translate(this.x,this.y);
		//context.rotate(45/180*Math.PI);
		//body
		context.beginPath();
		context.moveTo(0,0);
		context.lineTo(0,25);
		context.fillStyle="black";
		context.quadraticCurveTo(5,27,10,25);
		context.quadraticCurveTo(10,20,10,0);
		context.quadraticCurveTo(5,-2,0,0);
		context.fill();
		context.stroke();
		//box white line
		context.beginPath();
		context.strokeStyle="white";
		context.moveTo(7,4);
		context.lineTo(7,21);
		context.stroke();
		//head
		context.beginPath();
		context.lineWidth=2;
		context.strokeStyle="black";
		context.moveTo(5,0);
		context.lineTo(5,-10);
		context.stroke();
		context.beginPath();
		context.lineWidth=1;
		context.arc(5,-10,4,Math.PI,0);
		context.stroke();
		context.beginPath();
		context.arc(5,-10,8,Math.PI,0);
		context.stroke();
		context.beginPath();
		context.arc(5,-10,14,Math.PI,0);
		context.stroke();
		//two hands
		context.beginPath();
		context.moveTo(0,5);
		context.lineTo(-5,5);
		context.lineWidth=2;
		context.moveTo(10,5);
		context.lineTo(15,5);
		context.stroke();
		//wings
		context.beginPath();
		context.lineWidth=2;
		context.fillStyle="black";
		context.rect(15,0,25,10);
		context.fill();
		context.stroke();
		
		context.beginPath();
		context.strokeStyle="white";
		context.lineWidth=2;
		context.moveTo(15,5);
		context.lineTo(41,5);
		context.moveTo(15,0);
		context.lineTo(41,0);
		context.moveTo(15,10);
		context.lineTo(41,10);
		context.moveTo(15,-1);
		context.lineTo(15,11);
		context.moveTo(-10,-1);
		context.lineTo(20,11);
		context.moveTo(25,-1);
		context.lineTo(25,11);
		context.moveTo(30,-10);
		context.lineTo(30,11);
		context.moveTo(35,-1);
		context.lineTo(35,11);
		context.moveTo(40,-1);
		context.lineTo(40,11);
		context.stroke();
		
		context.beginPath();
		context.fillStyle = "black";
		context.rect(-30,0,25,10);
		context.fill();
		context.stroke();
		
		context.beginPath();
		context.strokeStyle="white";
		context.lineWidth=2;
		context.moveTo(-5,5);
		context.lineTo(-31,5);
		context.moveTo(-10,-1);
		context.lineTo(-10,11);
		context.moveTo(-15,-1);
		context.lineTo(-15,11);
		context.moveTo(-20,-1);
		context.lineTo(-20,11);
		context.moveTo(-25,-1);
		context.lineTo(-25,11);
		context.stroke();
		
		context.restore();
		
	}
};

/*satellite3*/
var satellite3 = {
	x:0,
	y:0,
	tx:0,
	ty:0,
	
	setLocation:function(x,y){
		this.x = x;
		this.y = y;
	},
	
	draw:function(){
		context.save();
		context.translate(this.x,this.y);
		//body
		context.beginPath();
		context.fillStyle="black";
		context.rect(0,0,10,20);
		context.fill();
		context.stroke();
		//two hand
		context.beginPath();
		context.moveTo(0,10);
		context.lineTo(-5,10);
		context.stroke();
		context.beginPath();
		context.moveTo(10,10);
		context.lineTo(15,10);
		context.stroke();
		//wings
		context.beginPath();
		context.rect(15,5,15,10);
		context.fillStyle="black";
		context.fill();
		context.stroke();
		context.beginPath();
		context.rect(-20,5,15,10);
		context.fillStyle="black";
		context.fill();
		context.stroke();
		//head
		context.beginPath();
		context.moveTo(-8,-3);
		context.quadraticCurveTo(5,3,18,-3);
		context.quadraticCurveTo(5,-1,-8,-3);
		context.fillStyle="black";
		context.fill();
		context.stroke();
		context.beginPath();
		context.moveTo(-8,-3);
		context.quadraticCurveTo(5,-15,18,-3);
		context.stroke();
		context.beginPath();
		context.moveTo(5,-5);
		context.lineTo(5,-15);
		context.stroke();
		context.beginPath();
		context.lineWidth=4;
		context.moveTo(5,-15);
		context.lineTo(5,-15);
		context.stroke();
		
		context.restore();
		
	}
	
};
/*spaceship*/
var spaceship = {
	x:0,
	y:0,
	tx:0,
	ty:0,
	
	setLocation:function(x,y){
		this.x = x;
		this.y = y;
	},
	draw:function(){
		context.save();
		context.translate(this.x,this.y);
		
		//head
		context.beginPath();
		context.moveTo(0,0);
		context.quadraticCurveTo(-7,7,-5,25);
		context.quadraticCurveTo(0,25,5,25);
		context.quadraticCurveTo(7,7,0,0);
		context.fillStyle="black";
		context.fill();
		context.stroke();
		
		//tail
		context.beginPath();
		context.moveTo(-5,25);
		context.lineTo(-10,30);
		context.lineTo(-10,38);
		context.lineTo(-4,33);
		context.lineTo(4,33);
		context.lineTo(10,38);
		context.lineTo(10,30);
		context.lineTo(5,25);
		context.fillStyle="black";
		context.fill();
		context.stroke();
		
		//window
		context.beginPath();
		context.arc(0,10,1,0,2*Math.PI);
		context.strokeStyle="white";
		context.fillStyle="white";
		context.fill();
		context.stroke();
		
		context.restore();
		
	}
};
/*alien*/
var alien ={
	x:0,
	y:0,
	tx:0,
	ty:0,
	setLocation:function(x,y){
		this.x = x;
		this.y = y;
	},
	draw:function(){
		context.save();
		context.translate(this.x,this.y);
		
		//head
		context.beginPath();
		context.moveTo(0,0);
		context.quadraticCurveTo(-10,0,-10,15);
		context.quadraticCurveTo(0,15,10,15);
		context.quadraticCurveTo(10,0,0,0);
		context.lineWidth=3;
		context.stroke();
		context.beginPath();
		context.moveTo(0,5);
		context.quadraticCurveTo(-5,5,-5,10);
		context.lineWidth=2;
		context.stroke();
		context.beginPath();
		context.moveTo(0,0);
		context.lineTo(0,-5);
		context.lineWidth=3;
		context.stroke();
		
		//body
		//left hand
		context.beginPath();
		context.moveTo(-10,15);
		context.quadraticCurveTo(-15,15,-20,20);
		context.lineWidth=6;
		context.stroke();
		context.beginPath();
		context.moveTo(-20,20);
		context.lineTo(-25,17);
		context.moveTo(-20,20);
		context.lineTo(-25,23);
		context.lineWidth=4;
		context.stroke();
		//right hand
		context.beginPath();
		context.moveTo(10,15);
		context.quadraticCurveTo(15,15,20,5);
		context.lineWidth=6;
		context.stroke();
		context.beginPath();
		context.moveTo(20,5);
		context.lineTo(15,0);
		context.moveTo(20,5);
		context.lineTo(25,0);
		context.lineWidth=4;
		context.stroke();
		//body
		context.beginPath();
		context.rect(-10,15,20,10);
		context.fillStyle="black";
		context.fill();
		context.stroke();
		//leg
		context.beginPath();
		context.moveTo(-5,25);
		context.lineTo(-5,35);
		context.moveTo(5,25);
		context.lineTo(5,35);
		context.lineWidth=6;
		context.stroke();
		context.beginPath();
		context.moveTo(-10,35);
		context.lineTo(10,35);
		context.lineWidth=3;
		context.stroke();
		
		context.restore();
	}
};

/*jupiter*/
var jupiter = {
	x:0,
	y:0,
	tx:0,
	ty:0,
	setLocation:function(x,y){
		this.x = x;
		this.y = y;
	},
	draw:function(){
		context.save();
		context.translate(this.x,this.y);
		
		//circle
		context.beginPath();
		context.arc(0,0,20,0,2*Math.PI);
		context.lineWidth=3;
		context.stroke();
		
		//ellipse
		
		context.beginPath();
		context.moveTo(-20,0);
		context.quadraticCurveTo(-23,0,-25,5);
		context.quadraticCurveTo(0,10,25,5);
		context.quadraticCurveTo(23,0,20,0);
		context.lineWidth=2;
		context.stroke();
		
		//drawEllipseByCenter(context,200,450,60,20);
		
		context.restore();
		
	}
};

/*sun*/
var sun = {
	x:0,
	y:0,
	tx:0,
	ty:0,
	setLocation:function(x,y){
		this.x = x;
		this.y = y;
	},
	draw:function(){
		context.save();
		context.translate(this.x,this.y);
		
		//circle
		context.beginPath();
		context.arc(0,0,20,0,2*Math.PI);
		context.fillStyle="black";
		context.fill();
		context.stroke();
		
		//ellipse
		drawEllipseByCenter(context,0,0,60,20);
		
		context.restore();
	}
	
};

/*ufo*/
var ufo = {
	x:0,
	y:0,
	tx:0,
	ty:0,
	setLocation:function(){
		this.x = x;
		this.y = y;
	},
	draw:function(){
		context.save();
		context.translate(this.x,this.y);
		
		//semi-circle
		context.beginPath();
		context.moveTo(0,0);
		context.quadraticCurveTo(-10,0,-10,10);
		context.quadraticCurveTo(0,15,10,10);
		context.quadraticCurveTo(10,0,0,0);
		context.fillStyle="black";
		context.fill();
		context.stroke();
		
		context.beginPath();
		context.moveTo(-7,5);
		context.quadraticCurveTo(-14,5,-14,10);
		context.quadraticCurveTo(0,20,14,10);
		context.quadraticCurveTo(14,5,7,5);
		
		context.quadraticCurveTo(14,0,30,10);
		context.quadraticCurveTo(0,40,-30,10);
		context.quadraticCurveTo(-14,0,-7,5);
		context.fillStyle="black";
		context.fill();
		context.stroke();
		
		//window
		context.beginPath();
		context.arc(-20,10,3,0,2*Math.PI);
		
		//context.arc(322,110,3,0,2*Math.PI);
		context.lineWidth=1;
		context.fillStyle="white";
		context.fill();
		context.stroke();
		
		context.beginPath();
		context.arc(0,20,3,0,2*Math.PI);
		context.lineWidth=1;
		context.fillStyle="white";
		context.fill();
		context.stroke();
		
		context.beginPath();
		context.arc(22,10,3,0,2*Math.PI);
		context.lineWidth=1;
		context.fillStyle="white";
		context.fill();
		context.stroke();
		
		context.restore();
	}
};

/*milkway*/
var milkWay = {
	x:0,
	y:0,
	tx:0,
	ty:0,
	setLocation:function(x,y){
		this.x = x;
		this.y = y;
	},
	draw:function(){
		context.save();
		context.translate(this.x,this.y);
		
		//inside
		context.beginPath();
		context.moveTo(0,0);
		context.lineWidth=8;
		context.lineTo(0,15);
		context.lineTo(-5,17);
		context.lineTo(-10,17);
		context.lineTo(-10,25);
		context.lineTo(-5,30);
		context.lineTo(-5,35);
		context.stroke();
		context.beginPath();
		context.moveTo(-5,35);
		context.lineTo(-5,35);
		context.lineTo(5,30);
		context.lineTo(10,25);
		context.lineTo(15,25);
		context.lineTo(15,10);
		context.lineTo(0,10);
		
		context.stroke();
		
		//outer
		//context.beginPath();
		//context.moveTo(450,90);
		//context.bezierCurveTo(445,107,440,100,450,133);
		//context.lineWidth=2;
		//context.stroke();
		
		
		context.restore();
		
	}
};

function drawEllipseByCenter(context,cx,cy,w,h){
	drawEllipse(context,cx-w/2.0,cy-h/2.0,w,h);
}

function drawEllipse(context,x,y,w,h){
	var kappa = .5522848,
	ox = (w/2)*kappa,
	oy = (h/2)*kappa,
	xe = x+w,
	ye = y+h,
	xm = x+w/2,
	ym = y+h/2;
	
	context.beginPath();
	context.moveTo(x,ym);
	context.bezierCurveTo(x,ym-oy,xm-ox,y,xm,y);
	context.bezierCurveTo(xm+ox,y,xe,ym-oy,xe,ym);
	context.bezierCurveTo(xe,ym+oy,xm+ox,ye,xm,ye);
	context.bezierCurveTo(xm-ox,ye,x,ym+oy,x,ym);
	
	context.lineWidth=2;
	context.strokeStyle="while";
	//context.fillStyle = "black";
	//context.fill();
	context.stroke();
}

var objectContainer = [];

function addAllObjects(){
	objectContainer = [moon,satellite,satellite2,satellite3,spaceship,alien,jupiter,sun,ufo,milkWay];
}

addAllObjects();


//test the images
/*
function drawImage(){
	for(var obj = 0;obj<objectContainer.length;obj++){
		objectContainer[obj].draw();
	}
}

drawImage();

*/

var x;
var y;
var speed;
var angle;

function assortment(object){
	if (object.x == 0 && object.y == 0) {
		x = Math.floor(Math.random()*900+50);
		y = Math.floor(Math.random()*500+50);
		object.setLocation(x,y);
	}
	
	speed = 3;
	angle = Math.floor(Math.random()*2*Math.PI);
	
	object.tx = speed*Math.cos(angle);
	object.ty = speed*Math.sin(angle);
}

function assortAll(){
	for(var obj = 0;obj<objectContainer.length;obj++){
		assortment(objectContainer[obj]);
	}
}

assortAll();

function borderCheck(object,x,y){
	if(x + object.tx <= 25 || x + object.tx>= 975){
		object.tx = -object.tx;
	}
	if(y + object.ty <= 65 || y + object.ty >= 615){
		object.ty = -object.ty;
	}
}

//holes

var blueHole = document.getElementById("bluehole");
var purpleHole = document.getElementById("purplehole");
var blackHole = document.getElementById("blackhole");

//define type for holes
var holeObject = {
	x:0,
	y:0,
	type:0, //0 for blue,1 for purple and 2 for black
	eat:0,
	
	setData:function(x,y,type){
		this.x = x;
		this.y = y;
		this.type = type;
	},
	draw:function(){
		if(this.type==0){
			context.drawImage(blueHole,this.x - 25,this.y - 25,50,50);
		}else if(this.type==1){
			context.drawImage(purpleHole,this.x-25,this.y-25,50,50);
		}else{
			context.drawImage(blackHole,this.x - 25,this.y-25,50,50);
		}
	}
};

//store hole elements
var holeArray=[];
//every 3 seconds creat several holes
var holeInterval = 3;
var blueFreq;
var blackFreq;
var purpleFreq;

function createHole(){
	var ram = Math.random();
	var ramX;
	var ramY;
	
	if(level==1){
		blueFreq = 0.5;
		purpleFreq = 0.3;
		blackFreq = 0.2;
	}else{
		blueFreq = 1.0;
		purpleFreq = 0.6;
		blackFreq = 0.4;
	}
	
	if(ram <= blueFreq){
		//there will create a blue hole
		ramX = Math.floor(Math.random()*950+50);
		ramY = Math.floor(Math.random()*550+90);
		while(!checkOverlap(ramX,ramY)){
			ramX = Math.floor(Math.random()*950+50);
			ramY = Math.floor(Math.random()*550+90);
		}
		holeObject.setData(ramX,ramY,0);
		holeArray.push(holeObject);
	}
	
	ram = Math.random();
	if(ram <= purpleFreq){
		//there will create a purple hole
		ramX = Math.floor(Math.random()*950+50);
		ramY = Math.floor(Math.random()*550+90);
		while(!checkOverlap(ramX,ramY)){
			ramX = Math.floor(Math.random()*950+50);
			ramY = Math.floor(Math.random()*550+90);
		}
		holeObject.setData(ramX,ramY,1);
		holeArray.push(holeObject);
	}
	
	ram = Math.random();
	if(ram <= blackFreq){
		//there will create a purple hole
		ramX = Math.floor(Math.random()*950+50);
		ramY = Math.floor(Math.random()*550+90);
		while(!checkOverlap(ramX,ramY)){
			ramX = Math.floor(Math.random()*950+50);
			ramY = Math.floor(Math.random()*550+90);
		}
		holeObject.setData(ramX,ramY,2);
		holeArray.push(holeObject);
	}
}

//draw holes
function drawHole(){
	for(var i = 0;i < holeArray.length; i++){
		if(holeArray[i] != 0){
			holeArray[i].draw();
		}
	}
}

//pull objects
function pullObject(){
	
	//for each hole we check if there are any objects move inside their zone
	for(var i = 0; i < holeArray.length; i++){
		if(holeArray[i] != 0){
			for(var j = 0; j < objectContainer.length; j++){
				if(objectContainer[j] != 0){
					if(objectContainer[j].x >= holeArray[i].x-75&&objectContainer[j].x<=holeArray[i].x+75&&
					objectContainer[j].y >= holeArray[i].y-75&&objectContainer[j].y<=holeArray[i].y+75){
						//it will get pulled into the hole
						//now it is not moving along the original path
						objectContainer[j].tx = 0;
						objectContainer[j].ty = 0;
						//if it is a blue hole
						if(holeArray[i].type==0){
							if(objectContainer[j].x < holeArray[i].x){
								objectContainer[j].x++;
							}else{
								objectContainer[j].x--;
							}
							if(objectContainer[j].y < holeArray[i].y){
								objectContainer[j].y++;
							}else{
								objectContainer[j].y--;
							}
							
						}
						//purple hole
						if(holeArray[i].type==1){
							if(objectContainer[j].x < holeArray[i].x){
								objectContainer[j].x+=2;
							}else{
								objectContainer[j].x-=2;
							}
							if(objectContainer[j].y < holeArray[i].y){
								objectContainer[j].y+=2;
							}else{
								objectContainer[j].y-=2;
							}
							
						}
						//black hoel
						if(holeArray[i].type==2){
							if(objectContainer[j].x < holeArray[i].x){
								objectContainer[j].x+=4;
							}else{
								objectContainer[j].x-=4;
							}
							if(objectContainer[j].y < holeArray[i].y){
								objectContainer[j].y+=4;
							}else{
								objectContainer[j].y-=4;
							}
							
						}
						
						// if it is already too close, eat the object
						var disX = Math.abs(objectContainer[j].x-holeArray[i]);
						var disY = Math.abs(objectContainer[j].y - holeArray[i]);
						if(disX<1 && disY<1 ){
							planetNum--;
							objectContainer[j] = 0;
							holeArray[i].eat++;
							score-=50;
							//if the hole is full, it will get removed
							checkfull(holeArray[i],i);
						}
					}
				}
			}
		}
	}
}

//remove those full holes
function checkfull(holeObject,i){
	if(holeObject.type==0){
		if(holeObject.eat==3){
			reassort(holeObject);
			holeArray[i] = 0;
		}
	}
	if(holeObject.type==1){
		if(holeObject.eat==2){
			reassort(holeObject);
			holeArray[i] = 0;
		}
	}
	if(holeObject.type==2){
		if(holeObject.eat==1){
			reassort(holeObject);
			holeArray[i] = 0;
		}
	}
}

// holes cant be overlapped
function checkOverlap(x,y){
	for(var i = 0; i < holeArray.length; i++){
		if(x >= holeArray[i].x-100&&x <= holeArray[i].x+100&&y >= holeArray[i].y - 100&& y<= holeArray[i].y+100){
			return false;
		}
	}
	return true;
}

var running = true;
var raf;

function createButton(){
	//game button*/context.beginPath();
	context.clearRect(680,5,100,30);
	context.strokeStyle = "black";
	context.rect(680,5,100,30);
	context.stroke();
	context.font = 'italic 20pt Calibri';
	if(running == true){
		context.fillText("Pause",700,28);
	}else{
		context.fillText("Start",700,28);
	}
}

canvas.addEventListener("click",function(e){
	//click pause/resume
	var rect = canvas.getBoundingClientRect();
	
	if(e.clientX - rect.left > 680 && e.clientX- rect.left < 780 && e.clientY - rect.top > 5 && e.clientY- rect.top < 35){
		if(running == true){
			//stop animation
			window.cancelAnimationFrame(raf);
			//stop timer
			clearInterval(checkTime);
			//set running value
			running = false;
			//redraw the button
			createButton();
			//interval between 2 clicks
			sleep(50); 
		}
		else{
			raf = window.requestAnimationFrame(animate);
			//start timer
			checkTime = setInterval(countDown,1000);
			//reset running
			running = true;
			//create button
			createButton();
			//interval between 2 clicks
			sleep(50);
		}
	}
	
	//click the holes
	
	cx = e.clientX - rect.left;
	cy = e.clientY- rect.top;
	if(running == true){
		for(var i = 0; i < holeArray.length; i++){
			if(holeArray[i] != 0){
				if(cx>=holeArray[i].x-25&&cx<=holeArray[i].x+25&&cy>=holeArray[i].y-25&&cy<=holeArray[i].y+25){
					//add score
					if(holeArray[i].type==0){
						score+=5;
					}else if(holeArray[i].type==1){
						score+=10;
					}else{
						score+=20;
					}
					reassort(holeArray[i]);
					holeArray[i] = 0;
					
					
				}
			}
		}
	}
});

function reassort(holeObject){
	//check if there are any objects are pulled by this disappearing hole
	for(var i = 0; i < objectContainer.length; i++){
		if(objectContainer[i] != 0){
			if(objectContainer[i].x>=holeObject.x-75&&objectContainer[i].x<=holeObject.x+75
			&&objectContainer[i].y>=holeObject.y-75&&objectContainer[i].y<=holeObject.y+75){
				assortment(objectContainer[i]);
			}
		}
	}
}

/*countdown timer*/
function countDown(){
	Time--;
	holeInterval--;
}

function animate(){
	context.clearRect(0,0,1000,640);
	createCanvas();
	createButton();
	
	for(var obj = 0;obj<objectContainer.length;obj++){
		if(objectContainer[obj] !=0){
			borderCheck(objectContainer[obj],objectContainer[obj].x,objectContainer[obj].y);
			
			objectContainer[obj].x +=objectContainer[obj].tx;
			objectContainer[obj].y +=objectContainer[obj].ty;
			
			objectContainer[obj].draw();
		}
	}
	//draw holes
	if(holeInterval==0){
		createHole();
		holeInterval=3;
	}
	drawHole();
	pullObject();
	
	raf = window.requestAnimationFrame(animate);
}

animate();

