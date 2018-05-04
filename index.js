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
  let new_drivers = drivers.slice(0)
  const driver_sort = function (num1, num2){
    return num1.revenue - num2.revenue;
  };
  return new_drivers.sort(driver_sort);
};

function driversByName(drivers){
  let new_drivers = drivers.slice(0)
  const driver_sort = function (name1, name2){
    return name1.name.localeCompare(name2,name)
  };
  return new_drivers.sort(driver_sort);
};
