// task_5
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
class ElectricalDevice {
  constructor() {
    this.voltage = 220;
  }
  plug_in(electricPlug) {
    if (electricPlug == "on") {
      GeneralPower.sumPower(this.power);
      return "В розетку включен";
    }
    if (electricPlug == "off") {
      return "От розетки отключен";
    }
  }
}
//лампы
class Lighting extends ElectricalDevice {
  constructor(brand, type_of, plinth, power, voltage) {
    super(voltage);
    this.brand = brand;
    this.type_of = type_of;
    this.plinth = plinth;
    this.power = power;
  }
  plug_in(electricPlug) {
    if (electricPlug == "on") {
      GeneralPower.sumPower(this.power);
      return "Лампа горит";
    }
    if (electricPlug == "off") {
      return "Лампа не горит";
    }
  }
}
// чайники
class Kettle extends ElectricalDevice {
  constructor(brand, volume, bodyMaterial, power, voltage) {
    super(voltage);
    this.brand = brand;
    this.volume = volume;
    this.bodyMaterial = bodyMaterial;
    this.power = power;
  }
  plug_in(electricPlug) {
    if (electricPlug == "on") {
      GeneralPower.sumPower(this.power);

      return "Чайник включен";
    }
    if (electricPlug == "off") {
      return "Чайник отключен";
    }
  }
}
// утюги
class Iron extends ElectricalDevice {
  constructor(brand, weight, power, voltage) {
    super(voltage);
    this.brand = brand;
    this.weight = weight;
    this.power = power;
  }
}

const lamp = new Lighting("ЭРА", "led", "E27", 50, 333);
const kettle = new Kettle("Boch", 1.5, "стеклянный", 2000);
const iron = new Iron("Philips", 500, 1500);

console.log(lamp);
console.log(kettle);
console.log(iron);

console.log(lamp.plug_in("on"));
console.log(kettle.plug_in("on"));
console.log(iron.plug_in("on"));
// сумарная мощность
console.log(GeneralPower.totalPower());