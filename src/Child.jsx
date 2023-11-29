import { useEffect, useState } from "react";

export function Child() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const [items, setitems] = useState([
    { items: 1, name: "sagar" },
    { items: 2, name: "mahendra" },
    { items: 3, name: "pratik" },
  ]);

  function additems() {
    setitems((items) => {
      return [...items, { items: 4, name: "sagar" }];
    });
  }

  console.log("Body Rendered");
  useEffect(() => {
    console.log("Re-Rendered");
  });

  useEffect(() => {
    console.log("Mounted");
    return () => {
      console.log("Unmounted");
    };
  }, [name]);

  useEffect(() => {
    console.log(" Name & Age Updated");
  }, [name, age]);

  useEffect(() => {
    document.title = name;

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
    <br/>
      <button onClick={additems}>Add Items</button>
      <pre>
        {items.map((items) => (
          <div> {items.name} </div>
        ))}
      </pre>
    </div>
  );
}
