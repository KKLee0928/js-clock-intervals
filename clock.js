var second = document.getElementById("second");
	console.log(document.getElementById('second'));
var minute = document.getElementById("minute");
var hour = document.getElementById("hour");

var degreesSec = 0;
var degreesMin = 0;
var degreesHou = 0;

var tickHour = function () {
	if (degreesHou < 360) {
		degreesHou += .5;
	} else {
		degreesHou = 0;
	}

	hour.style.transform = "rotate(" + degreesHou + "deg)";
}
//need logic to move the second hand using the setInterval calling the tickSecond function
var tickMinute = function () {
	if (degreesMin < 360) {
		degreesMin += 6;
	} else {
		degreesMin = 0;
	}

	tickHour();
	minute.style.transform = "rotate(" + degreesMin + "deg)";
	//tickMinute === setInterval(tickSecond, 2000)
}

var tickSecond = function() {
	if (degreesSec < 360) {
		degreesSec += 6;
	} else {
		degreesSec = 0;
		tickMinute();  
	}
	
	second.style.transform = "rotate(" + degreesSec + "deg)";
		
}
//this will call tickSeconds to move every second

setInterval(tickSecond, 1);
//now set the minute hand to do that same. 
//something to think about, will the minute hand have the same
//logic or can I use the tickSecond function to initiate the minute 
//logic?

//	1 minute === 60 seconds. when 60 seconds makes 360 deg minute makes a 6 degree rotation.



