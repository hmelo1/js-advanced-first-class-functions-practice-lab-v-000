// Code your solution in this file!

function logDriverNames(drivers){
  const callback = function (driver) {
    console.log(driver.name);
  };
  drivers.forEach(callback);
};

function logDriversByHometown(drivers, location){
  const callback = function (driver){
    if (driver.hometown == location){
      console.log(driver.name);
    }
  };
  drivers.forEach(callback);
};

function driversByRevenue(drivers){
  const driver_sort = function (num1, num2){
    return num1.revenue - num2.revenue;
  };
  return drivers.driver_sort;
};
