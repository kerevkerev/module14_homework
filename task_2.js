// task_2

function checkProp(str, obj) {
  return str in obj ? true : false;
}
let str = "width";
console.log(checkProp(str, obj));
