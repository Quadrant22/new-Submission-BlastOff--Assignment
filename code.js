// function for countdownTimer, this is the function for the start button. 
function start(){
    console.log("start() function started");
//the variable for currTime is set to 10. 
    var currTime = 10; 
    console.log(currTime);
    document.getElementById("countdownStatus").innerHTML = currTime;
// setTimeout() method is used to delay per millisecond. 
//9
    setTimeout(function(){
        //text to show after the delay
        //the text replaces current screen to a text screen, we delete this line. 
        //document.write("I have waited 3 seconds");
        currTime = currTime - 1; 
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 1000)
//8
    setTimeout(function(){
        //text to show after the delay
        //the text replaces current screen to a text screen, we delete this line. 
        //document.write("I have waited 3 seconds");
        currTime = currTime - 1; 
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 2000)
//7
    setTimeout(function(){
        //text to show after the delay
        //the text replaces current screen to a text screen, we delete this line. 
        //document.write("I have waited 3 seconds");
        currTime = currTime - 1; 
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 3000)
//6
    setTimeout(function(){
        //text to show after the delay
        //the text replaces current screen to a text screen, we delete this line. 
        //document.write("I have waited 3 seconds");
        currTime = currTime - 1; 
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 4000)
//5
    setTimeout(function(){
        //text to show after the delay
        //the text replaces current screen to a text screen, we delete this line. 
        //document.write("I have waited 3 seconds");
        currTime = currTime - 1; 
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 5000)
//4
    setTimeout(function(){
        //text to show after the delay
        //the text replaces current screen to a text screen, we delete this line. 
        //document.write("I have waited 3 seconds");
        currTime = currTime - 1; 
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 6000)
//3
    setTimeout(function(){
        //text to show after the delay
        //the text replaces current screen to a text screen, we delete this line. 
        //document.write("I have waited 3 seconds");
        currTime = currTime - 1; 
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 7000)
//2
    setTimeout(function(){
        //text to show after the delay
        //the text replaces current screen to a text screen, we delete this line. 
        //document.write("I have waited 3 seconds");
        currTime = currTime - 1; 
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 8000)
//1
    setTimeout(function(){
        //text to show after the delay
        //the text replaces current screen to a text screen, we delete this line. 
        //document.write("I have waited 3 seconds");
        currTime = currTime - 1; 
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 9000)

//0
    setTimeout(function(){
        //text to show after the delay
        //the text replaces current screen to a text screen, we delete this line. 
        //document.write("I have waited 3 seconds");
        currTime = currTime - 1; 
        document.getElementById("countdownStatus").innerHTML = "BlastOff !!!";
        console.log(currTime);
    }, 10000)

}