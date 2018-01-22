function momFruitCollsion(){
	// gameover or not?
	if(!data.gameOver){
	   for(var i =0;i<fruit.num;i++){
		 if(fruit.alive[i]&&fruit.l[i]>=14){
			var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
			if(l<900){
				//fruit eaten
				fruit.dead(i);
				//judge blue or orange
				if(fruit.fruitType[i]=="orange"){
				 data.orangeFruitNum++;
				 if(data.orangeFruitNum<=7){
					mom.bigOrangeCount = data.orangeFruitNum;
				  }else{
					mom.bigOrangeCount=7;
				 }	
				}
				
				if(fruit.fruitType[i]=="blue"){
					data.blueFruitNum++;
					data.double = 2;
					if(data.blueFruitNum<=7){
						mom.bigBlueCount = data.blueFruitNum;
					}else{
						mom.bigBlueCount =7;
					}
					
				}
				//count fruitNum;
				data.Num = data.orangeFruitNum+data.blueFruitNum*2;
				//wave mom and baby
				wave.born(fruit.x[i],fruit.y[i]);
			}
			
		}
	 }	
	}
	
	
}

// mom feed baby
function momBabyCollsion(){
	if(!data.gameOver){
	    var  l = calLength2(baby.x, baby.y, mom.x, mom.y);
		  if(l<900&&data.Num>=data.aimNum){
		  //recover
		 baby.babyBodyCount = 0;
		 data.addScore();
		 //eaten fruit num reset
		 data.reset();
		 mom.bigBlueCount =0;
		 mom.bigOrangeCount =0;
		 // eaten wave
		 halo.born(baby.x,baby.y);
		 //collect Num reset
		 data.Num = 0;
	  }
	 
	}

	
}
