var can1;
var can2;

var ctx1;
var ctx2;

var lastTime;
var deltaTime;

var canWidth;
var canHeight;

var bgPic = new Image();

var ane;
var fruit;
var mom;
var baby;

var mx;
var my;

var bigTail = [];
var bigEye =[];
var bigBlueBody =[];
var bigOrangeBody =[];

var babyTail =[];
var babyEye =[];
var babyBody =[];

//game score
var data;

//eaten wave
var wave;
var halo;

var dust;
var dustPic = [];

var restart;
document.body.onload = game;
function game(){
	init();
	lastTime = Date.now();
	deltaTime  = 0;
	gameloop();
}
function init(){
	//获得canvas context
    can1 = document.getElementById("canvas1");//fishs.dust,UI,circle
    ctx1 = can1.getContext('2d');
    can2 = document.getElementById("canvas2");//background,ane,fruits
    ctx2 = can2.getContext('2d');
    
    can1.addEventListener('mousemove',OnMouseMove,false);
    
    restart = document.getElementById("replay");
    
    
    bgPic.src="src/background.jpg";
    canWidth = can1.width;
    canHeight = can2.height;
    
    ane = new aneObj();
    ane.init();
    
    fruit = new fruitObj();
    fruit.init();
    
    mom = new momObj();
    mom.init();
    
    mx = canWidth*0.5;
    my = canHeight*0.5;
    
    baby = new babyObj();
    baby.init();
    
    //big tail eye body
    for(var i =0;i<8;i++){
    	bigTail[i] = new Image();
    	bigTail[i].src = "src/bigTail"+i+".png";
    }
    for(var i = 0;i<2;i++){
    	bigEye[i] = new Image();
    	bigEye[i].src = "src/bigEye"+i+".png";
    }
    for (var i=0;i<8;i++){
    	bigOrangeBody[i] = new Image();
    	bigOrangeBody[i].src = "src/bigSwim"+i+".png";
    }
    for (var i=0;i<8;i++){
    	bigBlueBody[i] = new Image();
    	bigBlueBody[i].src = "src/bigSwimBlue"+i+".png";
    }
    
    //baby tail eye body
    for(var i =0;i<8;i++){
    	babyTail[i] = new Image();
    	babyTail[i].src = "src/babyTail"+i+".png";
    }
    for(var i = 0;i<2;i++){
    	babyEye[i] = new Image();
    	babyEye[i].src = "src/babyEye"+i+".png";
    }
    for (var i=0;i<20;i++){
    	babyBody[i] = new Image();
    	babyBody[i].src = "src/babyFade"+i+".png";
    }
    
    data = new dataObj();
    ctx1.fillStyle = "white";
    ctx1.textAlign = "center";
    
    wave = new waveObj();
    wave.init();
    
    halo = new haloObj();
    halo.init();
    
    for (var i=0;i<7;i++){
    	dustPic[i] = new Image();
    	dustPic[i].src = "src/dust"+i+".png";
    }
    dust = new dustObj();
    dust.init();
    
}

function gameloop(){
	window.requestAnimationFrame(gameloop);//setInterval,setTimeout,fram per second
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	if(deltaTime>40){
		deltaTime = 40;
	}
	//console.log(deltaTime);
	
	drawBackground();
	ane.draw();
    fruitMonitor();
	fruit.draw();
	
	ctx1.clearRect(0,0,canWidth,canHeight);
	mom.draw();
	
	momFruitCollsion();
	
	baby.draw();
	
	momBabyCollsion();
	data.draw();
	
	wave.draw();
	halo.draw();
	dust.draw();
}
function OnMouseMove(e){
	
		if(e.offsetXetX||e.layerX||data.win&&!data.gameOver){
	  	mx = e.offsetX == undefined?e.layerX:e.offsetX;
	  	my = e.offsetY == undefined?e.layerY:e.offsetY;
	  	
	  }
		
}

function replay(){
     console.log("s");
}
