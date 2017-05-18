// Who to create object

var obj = {};

// or 

var obj = new Object();

// or 

var obj = Object.create(Object.prototype);

// set properties 

obj.key = 'value';

// or 
obj['key'] = 'value';


//  get properties

var key = obj.key;

// or 

var key = obj['key']

// example
var car = {
    year: null,
    type: null,
    brand: null,
    subType: null,
};

// create a sedan Ford Car object

var ford = Object.create(car)
ford.year = 1956;
ford.type = 'sedan';
ford.brand = 'Ford';


console.log(ford);
// must print { year: 1956, type: 'sedan', brand: 'Ford' }

// Create a mustang car inherits from the frod car object

var mustang = Object.create(ford);
mustang.subType = 'mustang';
mustang.type = 'sport';

console.log(mustang.year); // 1956
console.log(mustang.type); // sport

