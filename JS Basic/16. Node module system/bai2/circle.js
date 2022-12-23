function Circle(x,y,radius){
    this.x=x;
    this.y=y;
    this.radius=radius;
  };
  Circle.prototype.isOverlapped = function(obj){
    var d=Math.sqrt((Math.pow(obj.x-this.x,2)+Math.pow(obj.y-this.y,2)));
    if(this.radius-obj.radius<d&d<this.radius+obj.radius)
    {
      return -1;
    }
    if((d>this.radius+obj.radius)|(d<this.radius-obj.radius)|(d===0))
    {
      return 1;
    }
    return 0;
  };
  
  module.exports = Circle;