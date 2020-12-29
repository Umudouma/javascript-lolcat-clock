var napTimeSelector =  document.getElementById("napTimeSelector");

var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpTime;
var lunchTime;
var napTime;

var wakeUpTimeEvent;
var lunchTimeEvent;
var napTimeEvent;

var napTimeSelector = function () {
	napTime = napTimeSelector.value;
};

var lunchTimeSelector = function () {
	lunchTime = lunchTimeSelector.value;
};

var wakeUpTimeSelector = function () {
	wakeUpTime = wakeUpTimeSelector.value;
};

napTimeSelector.addEventListener('change', napTimeEvent);

lunchTimeSelector.addEventListener('change', lunchTimeEvent);

wakeUpTimeSelector.addEventListener('change', wakeUpTimeEvent);
