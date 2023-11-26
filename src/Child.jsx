import { useEffect, useState } from "react";

export function Child() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");

  //   console.log("Body Rendered");
  // useEffect(() => {
  //   console.log("Re-Rendered");
  // });

  useEffect(() => {
  //   console.log("Mounted");
  //   return () => {
  //     console.log("Unmounted");
  //   };
  // }, [name]);

  // useEffect(() => {
  //   console.log(" Name & Age Updated");
  // }, [name, age]);

  // useEffect(() => {
  //   document.title = name;

    const timeout = setTimeout(() => {
      console.log("Name Updated");
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [name]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setAge((a) => a - 1)}>-</button>
      {age}
      <button onClick={() => setAge((a) => a + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
    </div>
  );
}
