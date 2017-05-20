var Subject = require('./Subject');
var Observer = require('./Observer');

function commonUpdate(context) {
	console.log(context);
}



var subject = new Subject();

var observer1 =new Observer();
observer1.update = commonUpdate;

var observer2 =new Observer();
observer2.update = commonUpdate;

var observer3 =new Observer();
observer3.update = commonUpdate;


subject.addObserver(observer1); 
subject.addObserver(observer2);
subject.addObserver(observer3); 

subject.notify('new Message');