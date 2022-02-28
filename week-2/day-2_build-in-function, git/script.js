// build in function method bawaan js

const firstName = "Mutiara";
const lastName = "Az Zahra";
const age = 22;
const myName
const myFullName = "Mutiara?Az?Zahra";

// string

const myName = "Mutiara Az Zahra";
console.log(myName.length);
console.log(myName[0]);

// slice
console.log(myName.slice(6, 9));

// concat: menggabungkan 2 atau lebih suatu value
console.log(myName.concat(" adalah", " seorang", " penyanyi"));

// string literal, bisa manggil variabel, ``
const fullName = `hallo, nama saya ${firstName} ${lastName}, dan umur saya ${age}`;
console.log(fullName);

// split
const hasilSplit = myFullName.split("?");
const hasilSplit1 = myName.split(" ");
console.log(hasilSplit);
console.log(hasilSplit1);

//uppercase, lowercase
const hasilUpperCase = myFullName.toUpperCase();
console.log(hasilUpperCase);

const hasilLowerCase = myFullName.toLowerCase();
console.log(hasilLowerCase);

const students = ["a", "b", "c", "d"];
const hasilSliceArray = students.slice(0, 2);
console.log(hasilSliceArray);

const hasilConcatArray = students.concat("x", "z");
console.log(hasilConcatArray);

// reverse
const hasilReverse = student.reverse()
console.log(hasilReverse);
// join

//foreach build in function yg ga mereturn value