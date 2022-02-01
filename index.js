// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function() {
    return drivers.slice(0,2)
}
const returnLastTwoDrivers =  function() {
    return drivers.slice(2,4)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (num){
    return function(fare) {
        return fare*num
    }
}

const fareDoubler = function(double){
    return double * 2
}
const fareTripler = function(triple){
    return triple * 3
}
function selectDifferentDrivers(drivers, cab){
    return cab (drivers)
}