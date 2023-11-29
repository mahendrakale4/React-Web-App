import { useRef } from "react";

export function useRandomValue() {
  const myref = useRef();
  const setrandomvalue = () => {
    return (myref.current = Math.random());
  };
  const printvalue = () => {
    return console.log(myref.current);
  };
  return { setrandomvalue, printvalue };
}
