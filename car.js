

const car = module.exports ={
	color = 'blue',
	convertible = true,
	speed = 0,
	
};


accelerate() {
	console.log(this.speed + " old speed");
	this.speed += 20;
	console.log(this.speed + " new speed")

},
decelerate() {
	console.log(this.speed + " old speed");
	this.speed -= 5;
	console.log(this.speed + " new speed")

},
car.accelerate();
car.decelerate();