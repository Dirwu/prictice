var momObj = function(){
	this.x;
	this.y;
	this.angle;
	this.bigEye = new Image();
	this.bigBody = new Image();
	this.bigTail = new Image();
	
	this.bigTailTimer = 0;
	this.bigTailCount = 0;
	
	this.bigEyeTimer =0;
	this.bigEyeCount =0;
	this.bigEyeInterval = 1000;
	
	this.bigBodyTimer = 0;
	this.bigBodyCount = 0;
	
	this.bigBodyCount =0;
	this.bigOrangeCount =0;
	
}

momObj.prototype.init = function(){
	this.x =canWidth*0.5;
	this.y = canHeight*0.5;
	this.angle =0;
	this.bigEye.src = "src/bigEye0.png";
	this.bigBody.src ="src/bigSwim7.png";
	this.bigTail.src ="src/bigTail0.png";
}
momObj.prototype.draw = function(){
		
	//lerpDistance(aim, cur, ratio)
	//距离追随
	this.x = lerpDistance(mx,this.x,0.93);
	this.y = lerpDistance(my,this.y,0.93);
	
	//delta angle
	//Math.atan2(y,x)
	//角度追随
	var deltaY = my-this.y;
	var deltaX = mx-this.x;
	var beta = Math.atan2(deltaY,deltaX)+Math.PI;
	
	//lerpAngle(a, b, t)
	this.angle = lerpAngle(beta,this.angle,0.5);
	
	//big tail count
	this.bigTailTimer +=deltaTime;
	if(this.bigTailTimer>50){
		this.bigTailCount = (this.bigTailCount+1)%8;
		this.bigTailTimer %= 50; 
	}
	//big eye count
	this.bigEyeTimer +=deltaTime;
	if(this.bigEyeTimer>this.bigEyeInterval){
		this.bigEyeCount = (this.bigEyeCount+1)%2;
    	this.bigEyeTimer %= this.bigEyeInterval;
    	if(this.bigEyeCount ===0){
    		this.bigEyeInterval = Math.random()*1500+2000;
    	}else{
    		this.bigEyeInterval =200;
    	}
	}
	//big body count
	 this.bigBodyTimer +=deltaTime;
    if(this.bigBodyTimer>300){
    	this.bigBodyCount = this.babyBodyCount+1;
		this.bigBodyTimer %=300;
		if(this.bigBodyCount>7){
			this.bigBodyCount=7;
		}
    }
	
	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	
	
	
	//var bigBodyCount =this.bigBodyCount;
	//ctx1.drawImage(this.bigBody,-this.bigBody.width*0.5,-this.bigBody.height*0.5);
	var bigBlueCount = this.bigBlueCount;
	var bigOrangeCount = this.bigOrangeCount;

	
	if(data.double===2){		
		ctx1.drawImage(bigBlueBody[bigBlueCount],-bigBlueBody[bigBlueCount].width*0.5,-bigBlueBody[bigBlueCount].height*0.5);
	}if(data.double===1){
		ctx1.drawImage(bigOrangeBody[bigOrangeCount],-bigOrangeBody[bigOrangeCount].width*0.5,-bigOrangeBody[bigOrangeCount].height*0.5);
		
	}
	
	
	var bigEyeCount = this.bigEyeCount;
	ctx1.drawImage(bigEye[bigEyeCount],-bigEye[bigEyeCount].width*0.5,-bigEye[bigEyeCount].height*0.5);
	
	var bigTailCount = this.bigTailCount;
	ctx1.drawImage(bigTail[bigTailCount],-bigTail[bigTailCount].width*0.5+30,-bigTail[bigTailCount].height*0.5);
	ctx1.restore();
}
