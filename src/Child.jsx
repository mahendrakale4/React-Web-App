// import { useCallback, useEffect, useRef, useState } from "react";
import { useRandomValue } from "./useRandomValue";
import { useInputValue } from "./useInputValue";

export function Child() {
  // const [age, setAge] = useState(0);

  const { setrandomvalue, printvalue } = useRandomValue();
  const { nameInput } = useInputValue("John");

  // const printname = useCallback(() => {
  //   console.log("name", name);
  // }, [name]);
  // useEffect(() => {
  //   console.log("Inside useEffect");
  //   printname();
  // });

  // useEffect(() => {
  //   console.log(
  //     " New -> Printname function is create: bcuz everything it create new reference"
  //   );
  // }, [printname]);

  return (
    <div>
      <button onClick={setrandomvalue}>Random value</button>
      <button onClick={printvalue}>Print value</button>

      <br />
      <label>
        Name:
        <input {...nameInput}></input>
      </label>

      <br />
      {/* <label>
        Age:
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}></input>
      </label> 
      <br />*/}
    </div>
  );
}
