// Code your solution in this file!

function logDriverNames(drivers){
  const callback = function (driver) {
    console.log(driver.name)
  }
  drivers.forEach(callback);
}
