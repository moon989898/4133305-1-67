import Basic from "@/components/Basic";
import React from "react";
import Hook from "@/components/Hook";

 

 const App : React.FC= ( )=>{
  return(
    <>
    <h1>ทันบอก ทันชอบแอมมากๆ</h1>
      <p>Hello Typescripe</p>

      <Basic initVal="1" />
      <Hook initHook="5" /> 

    </>
  )
} ;

export default App;
