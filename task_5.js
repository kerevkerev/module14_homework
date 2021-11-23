class ElectricalDevice {
  constructor() {
    this.voltage = 220;
  }
  plug_in(electricPlug) {
    if (electricPlug == "on") {
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
    this.power = `${power} Вт`;
  }
  plug_in(electricPlug) {
    if (electricPlug == "on") {
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
    this.power = `${power} Вт`;
  }
  plug_in(electricPlug) {
    if (electricPlug == "on") {
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
    this.power = `${power} Вт`;
  }
}

const lamp = new Lighting("ЭРА", "led", "E27", 50, 333);
const kettle = new Kettle("Boch", 1.5, "стеклянный", 2000);
const iron = new Iron("Philips", 500, 1500);

console.log(lamp);
console.log(kettle);
console.log(iron);

console.log(lamp.plug_in("on"));
console.log(kettle.plug_in("off"));
console.log(iron.plug_in("on"));

//Необходимо учитывать мощность включенного электроприбора. Как обратится к множеству объектов???

function power() {
  //   if(при условии что прибор включен в розетку)
  return `Cумарная мощность включенных электроприборов ${
    parseInt(iron.power) + parseInt(kettle.power) + parseInt(lamp.power)
  } Вт`;
}
console.log(power());


// сумарная мощность
// class GeneralPower{
//     static power(){
//         if(lamp.plug_in("on")||kettle.plug_in("on")||iron.plug_in("on"))

//     }
// }