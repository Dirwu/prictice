var fruitObj = function(){
	this.alive = [];//bool
	this.orange = new Image();//黄色果实
	this.blue = new Image();//蓝色果实
	this.x =[];//果实横坐标
	this.y =[];//果实纵坐标
	this.aneId = [];
	this.spd = [];//果实生长和上浮速度比
	this.l =[];//果实大小
	this.fruitType =[];//果实种类
}

fruitObj.prototype.num = 30;
fruitObj.prototype.init = function(){
	for (var i =0;i<this.num;i++){
		this.alive[i] = false;
		this.x[i] =0;
		this.y[i] =0;
		this.l[i] =0;
		this.aneId[i] = 0;
		this.spd[i] = Math.random()*0.017+0.003;//[0.01,0.018)
		this.fruitType[i] ="";
		//this.born(i);
		
	}
	this.orange.src = "src/fruit.png";
	this.blue.src = "src/blue.png";
}
fruitObj.prototype.dead = function(i){
	this.alive[i] = false;
}

fruitObj.prototype.draw = function(){
	for(var i =0;i<this.num;i++){
		//draw
		//find a ane,born,grow,fly up
		 
		if(this.alive[i]){
			if(this.fruitType[i]=="blue"){
				var pic = this.blue;
			}
			else{
				var pic = this.orange;
			}
		 if(this.l[i]<=14){
		 	var aneId = this.aneId[i];
		 	this.x[i] = ane.headx[aneId];
	        this.y[i] = ane.heady[aneId];
			this.l[i] += this.spd[i]*deltaTime;
			//ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
		}
		else{
			this.y[i] -= this.spd[i]*7*deltaTime;
			
		}
		 if(this.y[i]<-10){
			this.alive[i] =false;
		 }	
		}
		
		ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
		//console.log(deltaTime);
	}
}
fruitObj.prototype.born = function(i){
	
    this.aneId[i] = Math.floor(Math.random()*ane.num);
	this.l[i] =0;
	this.alive[i] = true;
	var ran =Math.random();
	if(ran<0.2){
		this.fruitType[i] ="blue";
	}
	else{
		this.fruitType[i] ="orange";
	}
}

function fruitMonitor(){
	var num = 0;
	for(var i =0;i<fruit.num;i++){
		if(fruit.alive[i]){
			num++;
		} 		
	}
	
	if(num<15){
	 sendFruit();
	 return;
	}
   		
}

function sendFruit(){
	for(var i =0;i<fruit.num;i++){
		if(!fruit.alive[i]){
			fruit.born(i);
			return;
		}
	}
}
