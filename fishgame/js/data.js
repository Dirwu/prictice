var dataObj = function(){
	this.orangeFruitNum=0;
	this.blueFruitNum=0;
	this.Num =0;
	this.score=0;
	this.aimNum =0;//小鱼不同阶段果实卫喂食数量
	this.double = 1;//果实亚瑟控制，黄色为1，蓝色为2
	this.gameOver = false;
	this.win = false;
	this.alpha = 0;
}
dataObj.prototype.reset = function(){
	this.orangeFruitNum = 0;
	this.blueFruitNum =0;
	this.double = 1;
}
dataObj.prototype.addScore = function(){
	 var Num = this.orangeFruitNum+this.blueFruitNum;
	 //score count
	if(Num>0&&Num<=5){
		this.score += this.orangeFruitNum *10+this.blueFruitNum*20;
	}else if(Num>5){
		this.score += this.orangeFruitNum *20+this.blueFruitNum*40;
	}
	//aim fruitNum
	if(this.score<=1000&&this.score>=0){
	this.aimNum = 2;
	}else if(this.score>=1000&&this.score<5000){
	this.aimNum = 4;
	}else if(this.score>5000&&this.score<10000){
	this.aimNum =6;
	}else if(this.score>=10000){
	this.aimNum = 0;
	this.win = true;
	}
}
dataObj.prototype.draw = function(){
	var w = can1.width;
	var h =can2.height;
	
	ctx1.save();
	ctx1.font = "20px Verdana";
	ctx1.fillText("Score "+this.score,w*0.5,h-500);
	ctx1.restore();
	
	ctx1.save();
	ctx1.font = "16px Verdana";
	ctx1.fillText("aimNum "+this.aimNum,w*0.5,h-80);
	ctx1.fillText("collectNum "+this.Num,w*0.5,h-50);
	ctx1.restore();
	
	ctx1.save();
	ctx1.shadowBlur = 10;
	ctx1.shadowColor = "white";
	ctx1.font = "24px Verdana";	
	if(this.gameOver&&!this.win){
		this.alpha += deltaTime *0.001;
		if(this.alpha>1){
			this.alpha=1;
		}
		ctx1.fillStyle = "rgba(255,255,255,"+this.alpha+")";
		ctx1.fillText("GAME OVER",w*0.5,h*0.5);
		
		
	}
	ctx1.restore();
	if(this.score>=10000){
	ctx1.save();
	ctx1.shadowBlur = 10;
	ctx1.shadowColor = "white";
	ctx1.font = "36px Verdana";	
	
		this.alpha += deltaTime *0.001;
		if(this.alpha>1){
			this.alpha=1;
		}
	ctx1.fillStyle = "rgba(255,255,255,"+1+")";
    ctx1.fillText("WINNER",w*0.5,h*0.5);
    ctx1.restore();
	}
}
