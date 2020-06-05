import React from "react";
import Semester from "./components/Semester";
const App = () => {
  const [cap, setCap] = React.useState(
    "Your CAP will be updated on the go here as you enter modules"
  );
  // (summation of mc*grade) / total mc
  const calculateCAP = (modules) => {
    let numerator = 0;
    let denominator = 0;
    console.log(numerator / denominator);
    modules.forEach((module) => {
      if (module.grade !== "S" && module.grade !== "U") {
        numerator += Number(module.mc) * parseFloat(module.grade);
        denominator += Number(module.mc);
      }
    });
    const cap = numerator / denominator;
    if (numerator !== 0 && denominator !== 0) {
      setCap(Math.round((cap + Number.EPSILON) * 100) / 100);
    }
  };

  return (
    <div className="ui container">
      <h1>CAP Calculator</h1>
      <br />
      <h2>{isNaN(cap) ? cap : cap.toFixed(2)}</h2>
      <br />
      <Semester onListUpdate={calculateCAP} />
    </div>
  );
};

export default App;
