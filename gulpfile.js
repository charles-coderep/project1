const gulp = require("gulp");

/*
function helloWorld(done){
    console.log("hello world");
    done();

    
}
gulp.task(helloWorld);
*/


gulp.task('start', function (done){ //taskName, taskFunction - gulp looks for taskname and if there is only one argument it takes the name of the function and uses it as the name of the task
    console.log("hello world");
    done();
})