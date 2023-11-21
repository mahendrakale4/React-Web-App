import { useState } from "react";
export function Counter() {
  const [count, setcount] = useState(0);

  return <h1 onClick={() => setcount((prev) => prev + 1)}>Click me {count}</h1>;
}
