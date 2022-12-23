/**
 * Viết hàm xây dựng Shape để tạo các đối tượng hình học có các thuộc tính sau:
 *  {
 *    color: String,
 *    shape: String,
 *    fill: boolean
 *  }
*/

function Shape(color, shape, fill) {
    // Your code here
    this.color=color;
    this.shape=shape;
    this.fill=fill;
  }
  
  var shape1 = new Shape("red", "rectangle", true);
  var shape2 = new Shape("orange", "triangle", false);
  var shape3 = new Shape("tomato", "circle", true);
  