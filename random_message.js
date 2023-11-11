let subjects = ["My", "Your", "Her", "His"];
let objects = ["car", "boat", "computer", "watch"];
let values = ["20,000", "1,000,000", "500", "25"];

function generator(subjects, objects, values) {
    let indexes = [];
    indexes[0] = subjects[Math.floor(Math.random() * 4)];
    indexes[1] = objects[Math.floor(Math.random() * 4)];
    indexes[2] = values[Math.floor(Math.random() * 4)];
    console.log(`${indexes[0]} ${indexes[1]} cost $${indexes[2]}`);
}

generator(subjects, objects, values);