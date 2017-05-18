var Singleton = (function () {
    var instance;
    var creationTime ;
    function createInstance() {
       
        creationTime = +new Date(); // current timestamp privert variable
        return {
            publicMethod: function () {
                console.log("i am public method")
            },
            publicVariable: "Hello Singleton" , 
            getCreationTime : function(){
                return creationTime;
            }
        }
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();

console.log(instance1.getCreationTime() === instance2.getCreationTime()); // true