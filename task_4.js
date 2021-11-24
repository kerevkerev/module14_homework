// task_4
// расчет мощности включенных электроприборов
const GeneralPower = {
  power: 0,
  sumPower: function (power) {
    this.power += power;
  },
  totalPower: function () {
    return `Общая мощность подключенная к сети: ${this.power} Вт`;
  },
};

// электроприборы
function ElectricalDevice() {
  this.voltage = 220;
}
ElectricalDevice.prototype.plug_in = function (electricPlug) {
  if (electricPlug == "on") {
    GeneralPower.sumPower(this.power);
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
  this.power = power;
}
Lighting.prototype = new ElectricalDevice();
Lighting.prototype.plug_in = function (electricPlug) {
  if (electricPlug == "on") {
    GeneralPower.sumPower(this.power);

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
  this.power = power;
}
Kettle.prototype = new ElectricalDevice();
Kettle.prototype.plug_in = function (electricPlug) {
  if (electricPlug == "on") {
    GeneralPower.sumPower(this.power);

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
  this.power = power;
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
console.log(GeneralPower.totalPower())
