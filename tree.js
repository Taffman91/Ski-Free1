function tree(){

  this.y = window.innerHeight+random(100,400);
  this.x = random(100, window.innerWidth-100);

  this.show = function(){
    fill(0);
    stroke(0);
    rect(this.x+11.5,this.y+15,7.5,15);
    fill(0,178,0);
    stroke(0,178,0);
    triangle(this.x,this.y,this.x+30,this.y,this.x+15,this.y-15);
    triangle(this.x,this.y+10,this.x+30,this.y+10,this.x+15,this.y-15+10);
    triangle(this.x,this.y+20,this.x+30,this.y+20,this.x+15,this.y-15+20);
    this.y=this.y-moveSpeedY;
    if(this.y+100<0){
      this.y = window.innerHeight+random(100,400);
      this.x = random(100, window.innerWidth-100);
    }
  }

  this.update = function(bool){
    if(bool == false){
      this.x=this.x+moveSpeedX;
    }

    if(bool == true){
      this.x=this.x-moveSpeedX;
    }
  }
}
