class Wall {
    constructor(posX) {
     
      this.rx = posX; //setting the x posing where wall will be created  
      this.ry = height-random([400,370,350]);   //setting y position where wall will be created 
      this.spt=createSprite(this.rx, this.ry); //using rx,ry
      this.spt.shapeColor="green";
      this.spt.addAnimation("ground",wallAnimation);
      this.spt.scale=0.5;
    
    }
  
  
}
  


