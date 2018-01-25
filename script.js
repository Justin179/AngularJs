// revealing module pattern

(function(){
    
// 定義
var createWorker = function(){
    
    var task1 = function(){
        console.log('this is task1');
    }
    
    var task2 = function(){
        console.log('this is task2');
    }
        
    return {
      job1: task1,
      job2: task2
    };
    
}


var worker = createWorker();
worker.job1();
worker.job2();

}());
