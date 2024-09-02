var dateDiffInDays = function (dateOne, dateTwo) {
  //   write your code here
	const oneDay = 24*60*60*1000; // hours in a day * mins in a hour * seconds in a min * mili second in a second
	const firstDate = new date(dateOne);
	conts secondDate = new date(dateTwo);

	const diffIntime = secondDate.getTime() - firstDate.getTime()
	const diffInDay = Math.round(diffIntime/oneDay);
	return diffInDay;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
