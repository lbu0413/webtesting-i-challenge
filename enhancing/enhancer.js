module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if(item.enhancement < 20){
    item.enhancement++
  }
  else{
    return { ...item }
  }
  return { ...item };
}

function fail(item) {
  if(item.enhancement < 15){
    item.enhancement--
    item.durability = item.durability -5
  }
  else if(item.enhancement >= 15){
    item.enhancement--
    item.durability = item.durability - 10
  }
  else if(item.enhancement > 16){
    item.enhancement--
    item.durability--
  }
  return { ...item };
}

function repair(item) {
  if(item.durability < 100){
    item.durability = 100;
  }
  return { ...item };
}

function get(item) {
  if(item.enhancement = 0){
    return { ... item }
  }
  else if(item.enhancement > 0){
    return newItem
  }
  return { ...item };
}
