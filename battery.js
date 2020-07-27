navigator.getBattery().then(function (battery) {

  let connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  let type = connection.effectiveType;

    let prueba = document.getElementsByClassName("info2");
    let isconected = document.createTextNode(battery.charging ? "Yes" : "No");
    let paragraph = document.getElementById("textToShow");
    let paragraph2 = document.getElementById("textToShow2");
    let battlevel = document.getElementById("batterylevel");
  
    function updateAllBatteryInfo() {
      updateChargeInfo();
      updateLevelInfo();
      updateChargingInfo();
      updateDischargingInfo();
    }
    updateAllBatteryInfo();
  
    battery.addEventListener('chargingchange', function () {
      updateChargeInfo();
    });
  
    function updateChargeInfo() {
      console.log("Battery charging? " + (battery.charging ? "Yes" : "No"));
      paragraph.textContent = (battery.charging ? "Your Battery Charger is Connected" : "Your Battery Charger is Not Connected");
      paragraph2.textContent = "The Connection type is : "+type;
      //battlevel.textContent = "Battery level: " + Math.floor(battery.level * 100) + "%";
    }
  
    battery.addEventListener('levelchange', function () {
      updateLevelInfo();
    });
  
    function updateLevelInfo() {
      console.log("Battery level: " +
        battery.level * 100 + "%");
  
    }
  
    battery.addEventListener('chargingtimechange', function () {
      updateChargingInfo();
    });
  
    function updateChargingInfo() {
      console.log("Battery charging time: " +
        battery.chargingTime + " seconds");
    }
  
    battery.addEventListener('dischargingtimechange', function () {
      updateDischargingInfo();
    });
  
    function updateDischargingInfo() {
      console.log("Battery discharging time: " +
        battery.dischargingTime + " seconds");
    }
  
  });