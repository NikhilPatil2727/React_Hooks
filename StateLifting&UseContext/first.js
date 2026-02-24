import React, { useState, useMemo, useCallback, useEffect } from "react";
import ReactDOM from "react-dom/client"
import Second from "./second";
import GlobalContext from "./Global";
import Fifth from "./fifth";



function App(){

  const [count,setCount] = useState(10);
  console.log(GlobalContext);

  return (
    <>
   <Fifth></Fifth>
    <GlobalContext.Provider value={{count,setCount}}>
    <h1>Hello Coder Army {count}</h1>
    <Second />
    </GlobalContext.Provider>
    </>
  )
}

 {/* in above provide value we can pass like
      value={count}          // number
      value={"hello"}        // string
      value={true}           // boolean
      value={null}           // null

      value={{ count, setCount }}  // object with state & updater
      value={{ name: "Nikhil", age: 25 }}

      value={[count, setCount]}   // you can use array destructuring in consumers
      value={[1, 2, 3]}

      
      */}


// First create a Create Context
// Provid data ko uske andar: Descendent
// Consume the context





ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);


