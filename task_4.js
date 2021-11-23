// task_4

// электроприборы
function ElectricalDevice() {
  this.voltage = 220;
}
ElectricalDevice.prototype.plug_in = function (electricPlug) {
  if (electricPlug == "on") {
    return "В розетку включен";
  }
  if (electricPlug == "off") {
    return "От розетки отключен";
  }
};

//лампы
function Lighting(type_of, plinth, power) {
  this.type_of = type_of;
  this.plinth = plinth;
  this.power = `${power} Вт`;
}
Lighting.prototype = new ElectricalDevice();
Lighting.prototype.plug_in = function (electricPlug) {
  if (electricPlug == "on") {
    return "Лампа горит";
  }
  if (electricPlug == "off") {
    return "Лампа не горит";
  }
};

// чайники
function Kettle(volume, bodyMaterial, сolour, power) {
  this.volume = volume;
  this.bodyMaterial = bodyMaterial;
  this.colour = сolour;
  this.power = `${power} Вт`;
}
Kettle.prototype = new ElectricalDevice();
Kettle.prototype.plug_in = function (electricPlug) {
  if (electricPlug == "on") {
    return "Чайник включен";
  }
  if (electricPlug == "off") {
    return "Чайник отключен";
  }
};

// утюги
function Iron(brand, weight, power) {
  this.brand = brand;
  this.weight = `${weight} кг`;
  this.power = `${power} Вт`;
}
Iron.prototype = new ElectricalDevice();

const lamp = new Lighting("Светодиодная", "e27", 50);
const iron = new Iron("Филипс", 2, 2000);
const kettle = new Kettle(1.5, "пластиковый", "черный", 1500);

console.log(lamp);
console.log(lamp.plug_in("off"));
console.log(kettle);
console.log(kettle.plug_in("on"));
console.log(iron);
console.log(iron.plug_in("on"));

// подсчет мощности
function power() {
  //   if(при условии что прибор включен в розетку)
  return `Cумарная мощность включенных электроприборов ${
    parseInt(iron.power) + parseInt(kettle.power) + parseInt(lamp.power)
  } Вт`;
}
console.log(power());
