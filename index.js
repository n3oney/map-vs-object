const amount = Number(typeof process === "undefined" ? Deno.args[0] : process.argv[2]);

const array = " ".repeat(amount).split("");

const map = new Map();
const object = {};

console.time("Filling map");

for(let i in array) {
    map.set(i, i);
}

console.timeEnd("Filling map");

console.time("Filling object");

for(let i in array) {
    object[i] = i;
}

console.timeEnd("Filling object");

console.log("Map and Object both filled.");

console.time("Iterating over map (for of)");

for(let _item of map) {
    continue;
}

console.timeEnd("Iterating over map (for of)");

console.time("Iterating over map (for in)");

for(let _key in map) {
    continue;
}

console.timeEnd("Iterating over map (for in)");

console.time("Iterating over object (for of)");

for(let _item of Object.values(object)) {
    continue;
}

console.timeEnd("Iterating over object (for of)");

console.time("Iterating over object (for in)");

for(let _key in object) {
    continue;
}

console.timeEnd("Iterating over object (for in)");

console.time("Counting amount of elements in a map");

console.log(map.size);

console.timeEnd("Counting amount of elements in a map");

console.time("Counting amount of elements in an object");

console.log(Object.keys(object).length);

console.timeEnd("Counting amount of elements in an object");

console.time("Deleting all values from map one by one");

for(let key in map) {
    map.delete(key);
}

console.timeEnd("Deleting all values from map one by one");

console.time("Deleting all values from an object one by one");

for(let key in object) {
    delete object[key];
}

console.timeEnd("Deleting all values from an object one by one");