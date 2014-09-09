var m = require('./last-mod');
var moment = require('moment');

var filename = process.argv[2];
var timestamp = m(filename);

if (timestamp !==false)	{
	var date = new Date(timestamp);
	
	var fin = moment(date).format('D.M.YYYY H.m');

	console.log(formatted);
}
else{
	console.log("Error message");
}