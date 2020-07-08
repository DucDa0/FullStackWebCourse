// Class
class Bike {
    constructor(model, speed) {
        this.model = model;
        this.speed = speed;
    }
    setSpeed(x) {
        this.speed = x;
        return this;
    }
    run() {
        return 'Running with speed ' + this.speed;
    }
}
// Prototype
function BikeCopy(model, speed) {
    this.model = model;
    this.speed = speed;
}
BikeCopy.prototype.run = function () {
    return 'Running with speed ' + this.speed;
}
BikeCopy.prototype.setSpeed = function (x) {
    this.speed = x;
    return this;
}



var bike = new BikeCopy('Yamaha', 10);