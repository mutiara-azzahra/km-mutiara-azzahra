/*const Buah = (name, color, bentuk) => {
  return {
    name: name,
    color: color,
    bentuk: bentuk,
  };
};

const Pisang = Buah("Pisang", "Kuning", "Lonjong");
const Apel = Buah("Apel", "Merah", "Bulat");

console.log(
  `Buah ${Pisang.name}, warnanya ${Pisang.color}, bentuknya ${Pisang.bentuk}`
);
console.log(
  `Buah ${Apel.name}, warnanya ${Apel.color}, bentuknya ${Apel.bentuk}`
);

class Hero {
  constructor(heroName = "HeroName", stamina, type, attack) {
    this.heroName = heroName;
    this.stamina = stamina;
    this.tyoe = type;
    this.attack = attack;
  }
}
class Attribute extends Hero {
  constructor(heroName, stamina, type, attack) {
    super(heroName, stamina, type, attack);
  }

  showMyHealth() {
    return this.istirahat();
  }

  showMyName() {
    return this.name;
  }
}

class Student {
  constructor(props) {
    this.state = props;
    this.nilai = [80, 60, 50];
  }
}
const Akbar = new Student(new Hero());

const Diah = new Student({
  kesukaan: ["makan", "minum", "bernafas"],
  address: "jalan raya",
});*/

/*class Kendaraan {
  constructor(namaKendaraan, kategoriKendaraan) {
    super(namaKendaraan, kategoriKendaraan);
  }
  kecepatanKendaraan() {
    super.kecepatan();
  }
}

const Motor = new Kendaraan({
  namaKendaraan: "Sepeda Motor",
  kategoriKendaraan: "Roda Dua",
});

console.log(Motor.namaKendaraan);
*/

// soal 1
class Person {
  constructor() {
    this.name = "Lydia";
  }
}

Person = class AnotherPerson {
  constructor() {
    this.name = "Sarah";
  }
};

const member = new Person();
console.log(member.name);

// soal 3
class Counter {
  #number = 10;

  increment() {
    this.number++;
  }

  getNum() {
    return this.#number;
  }
}

class Bird {
  constructor() {
    console.log("Im a bird. bird");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("Im pink. flower");
    super();
  }
}
const pet = new Flamingo();

// soal 5
async function getData() {
  return await Promise.resolve("I made it");
}

const data = getData();
console.log(data);
