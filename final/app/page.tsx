import React from "react";
import Basic from "@/Components/Basic";
import Hook from "@/Components/Hook";
const App: React.FC = () => {
  return (
    <>
      <h1>Welcome To OREO.com</h1>
      <p>Hello User</p>

      <Basic initVal={1} gender="female" /> {/* Provide the 'gender' prop */}
      <Hook initHook="1"/>
    </>
  );
};

export default App;
