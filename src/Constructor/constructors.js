function Car(model , year , type){
    this.model = model ;
    this.year = year;
    this.type = type;
}

Car.prototype.getYear = function(){
    return this.year;
}


Car.prototype.setYear = function(year){
    this.year = year;
}


var ford = new Car('ford' , 1956 , 'sedan');
console.log(ford.getYear()); // 1956

ford.setYear(2015);
console.log(ford.getYear()); // 2015

