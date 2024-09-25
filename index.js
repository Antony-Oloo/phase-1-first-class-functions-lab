// // Code your solution in this file!
// const returnFirstTwoDrivers = function(){
//     return drivers.slice(0, 2);
// };
// const returnLastTwoDrivers = function(drivers) {
//     return drivers.slice(-2); 
//   };

// Returns the first two drivers in the array
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // Returns the last two drivers in the array
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // Array that holds both driver functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Higher-order function to create fare multiplier
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  // Function that doubles the fare
  const fareDoubler = createFareMultiplier(2);
  
  // Function that triples the fare
  const fareTripler = createFareMultiplier(3);
  
  // Function that selects drivers based on the provided driver function
  const selectDifferentDrivers = function(drivers, driverSelector) {
    return driverSelector(drivers);
  };