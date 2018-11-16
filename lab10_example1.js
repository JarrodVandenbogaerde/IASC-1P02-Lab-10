var start = new Date();
var time1 = start.getTime()

function stopTime() {
  var stop = new Date();
  var time2 = stop.getTime();
  var secs = (time2 - time1) / 1000;
  var myAlert = alert("You have been on this page for: " + secs + " seconds");
  console.log(myAlert);
}
