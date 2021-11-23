// task_1

function info(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key} : ${obj[key]}`);
    }
  }
}
info(obj);
