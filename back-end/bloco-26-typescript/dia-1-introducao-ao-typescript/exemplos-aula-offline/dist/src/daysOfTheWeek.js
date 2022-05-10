"use strict";
var daysOfTheWeek;
(function (daysOfTheWeek) {
    daysOfTheWeek[daysOfTheWeek["sunday"] = 1] = "sunday";
    daysOfTheWeek[daysOfTheWeek["monday"] = 2] = "monday";
    daysOfTheWeek[daysOfTheWeek["tuesday"] = 3] = "tuesday";
    daysOfTheWeek[daysOfTheWeek["wednesday"] = 4] = "wednesday";
    daysOfTheWeek[daysOfTheWeek["thursday"] = 5] = "thursday";
    daysOfTheWeek[daysOfTheWeek["friday"] = 6] = "friday";
    daysOfTheWeek[daysOfTheWeek["saturday"] = 7] = "saturday";
})(daysOfTheWeek || (daysOfTheWeek = {}));
