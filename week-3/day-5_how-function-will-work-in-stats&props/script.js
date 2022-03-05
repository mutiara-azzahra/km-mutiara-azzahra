const student = (props) => {
  console.log(props.name);
  // bisa juga langsung console.log(name, age)
};

student({ name: "mutiara" });
student("mutiara");

// ini yg console log kedua, bisa langsung masukin di object
// student({ age: 22, name: "mutiara" });
<student name="audy" age={20} />; //string gapapa gapake scope, backtick `` pake {}
