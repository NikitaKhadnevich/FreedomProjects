function Truck (name, weight, lifting) {
	this.name = name;
	this.weight = weight;
	this.lifting = lifting;
}
Truck.prototype.getTruckInfo = function () {
	console.log (`${this.name} : ${this.lifting}`)
}

function Volvo (name, weight, lifting, engine, fuel) {
	Truck.apply(this, arguments)
	this.engine = engine;
	this.fuel = fuel;
}

Volvo.prototype = Object.create(Truck.prototype)
Volvo.prototype.getHorsePower = function () {
	console.log(this.engine);
}

console.log(new Volvo('Truck', 50, 34, 500,'Diesel'));

function VolvoSpeed (name, weight, lifting, engine, fuel, speed) {
	Volvo.apply(this, arguments)
	this.speed = speed;
}

VolvoSpeed.prototype = Object.create(Volvo.prototype)
VolvoSpeed.prototype.getMaxSpeed = function () {
	console.log(this.speed);
}

console.log(new VolvoSpeed('Truck', 50, 34, 500,'Diesel', '120M/h'));


