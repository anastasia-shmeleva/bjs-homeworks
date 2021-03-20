// Задача 1. Практика функций высшего порядка
console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
    return weapons.map(weapon => weapon.name)
}

function getCountReliableWeapons(value) {
    const isReliable = weapon => weapon.durability > value;
    return weapons.filter(isReliable).length
}

function hasReliableWeapons(value) {
    const reliableWeapon = weapon => weapon.durability > value;
    return weapons.some(reliableWeapon)
}

function getReliableWeaponsNames(value) {
    const reliableArray = weapons.filter(weapon => weapon.durability > value);
    return reliableArray.map(weapon => weapon.name)
}

function getTotalDamage() {
    const damage = weapons.map(weapon => weapon.attack) //array of attack numbers
    const sum = damage.reduce((total, eachNumber) => total + eachNumber);
    return sum
}

// optional
function getValuestCountToSumValues(array, goal) {
    const sum = array.reduce((total, item) => total + item);
    if (sum < goal) return array.length;

    let subArray = [array[0]];
    array.reduce((state, item) => {
        if (state < goal) subArray.push(item);
        state = state + item;
        return state;   
    });
    return subArray.length;
}

//Задача 2. Ускорение долгих вычислений
function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
}

function memorize(fn, limit) {
    const memory = [];

    return (...rest) => {         
        if (memory.find(element => compareArrays(element.args, [...rest]))) return element.result;

        memory.push(element = {});
        element.args = [];
        element.args.push(...rest)
        element.result = fn(...rest);
        console.log(memory);
        if (memory.length > (limit-1)) memory.splice(0, 1);
        return element.result
    }
}
const mSum = memorize(sum, 2);

