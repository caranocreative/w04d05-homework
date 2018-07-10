

module.exports.convertible = {
	color:'blue',
	convertible: true,
	speed: 0,

	accelerate: function(speed)  {
		console.log(this.speed + " old speed");
		this.speed += speed;
		console.log(this.speed + " new speed");
	},

	deceleration: function(speed) {
		console.log(this.speed + " old speed");
		this.speed -= speed;
		console.log(this.speed + " new speed");
	}
};

