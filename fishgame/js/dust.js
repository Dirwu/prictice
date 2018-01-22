var dustObj = function(){
	this.x = [];
	this.y =[];
	this.amp = [];
	this.NO = [];
	this.alpha;
}
dustObj.prototype.num =30;
dustObj.prototype.init = function(){
	for(var i =0;i<this.num;i++){
		this.x[i] = canWidth*Math.random();
		this.y[i] = canHeight*Math.random();
		this.amp[i] = 20+15*Math.random();
		this.NO[i] = Math.floor(Math.random()*7);
	}
	this.alpha = 0;
}
dustObj.prototype.draw = function(){
	this.alpha += deltaTime*0.0008;
	if(this.alpha>1000){
		this.alpha = 1000;
	}
	var l = Math.sin(this.alpha);
	for (i =0;i<this.num;i++){
		var no = this.NO[i%7];
		ctx1.save();
		ctx1.globalAlpha =0.7;
		ctx1.drawImage(dustPic[no],this.x[i]+this.amp[i]*l,this.y[i]);
		ctx1.restore();
	}
}
