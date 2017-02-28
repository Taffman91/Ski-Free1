function snowMan(){
  this.x = window.innerWidth;
  this.y = window.innerHeight;

  this.show = function(){
    fill(100);
    stroke(100);
    ellipse(this.x,this.y,25,25);
    this.y-moveSpeedY;
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
