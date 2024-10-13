import React from "react";
import Basic from "@/components/Basic";
import Hook from "../components/Hook";

const App: React.FC = () => {
  return (
    <>
      <h1>Wellcome to IT.BRU</h1>
      <p>Hello Typcript</p>

      <Basic initVal="1" gender="Male" />

      <Hook initHook={Number(5)} />
    </>
  );
};

export default App;
