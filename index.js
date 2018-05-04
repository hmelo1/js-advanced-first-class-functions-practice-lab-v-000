// Code your solution in this file!

function logDriverNames(drivers){
  const callback = function (driver) {
    console.log(driver.name);
  };
  drivers.forEach(callback);
};

function logDriversByHometown(drivers, location){
  const callback = function (driver, location){
    if (driver.location == location){
      console.log(driver.name);
    }
  };
  drivers.forEach(callback);
};
