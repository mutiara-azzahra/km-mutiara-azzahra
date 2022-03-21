console.log("Promise");
// Promise

let sudahDatang;
let kondisi;

const doATask = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ini yg atas");
  }, 4000);
});

const doATask1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (kondisi === "avail") {
      resolve("janji terpenuhi");
    } else {
      reject("ada kendala nih");
    }
  }, 2000);
});

//callback statement
sudahDatang = doATask.then((result) => {
  sudahDatang = result;
  console.log(result);
});

sudahDatang = doATask1
  .then((result) => {
    sudahDatang = result;
    console.log(result);
  })
  .catch((err) => {
    console.log("ini yg error");
  });

//aysnc process
const doAPromise = async () => {
  try {
    const result1 = await doATask1;
    console.log(result1);
    const result = await doATask1;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
doAPromise();

console.log("ga nunggu");

// result hasil dari yg resolve

// Janji, pasti ada masa tunggunya

// Pending

// Fulfilled / resolved

// Rejected

// untuk menghandle pending pada suatu promise:
// callback statement

// asynchronous
