function ObserversList() {
	this.list = [];
};

ObserversList.prototype.add = function(obj) {
	return this.list.push(obj);
};

ObserversList.prototype.count = function() {
	return this.list.length;
};

ObserversList.prototype.get = function(index) {
	return (index > -1 && index < this.list.length  ) ?  this.list[index] : null; 
};

ObserversList.prototype.indexOf = function( obj, startIndex ){
  var i = startIndex;
 
  while( i < this.list.length ){
    if( this.list[i] === obj ){
      return i;
    }
    i++;
  }
 
  return -1;
};
 
ObserversList.prototype.removeAt = function( index ){
  this.list.splice( index, 1 );
};

module.exports = ObserversList;
