import { useState } from "react";

export function useInputValue(initvalue) {
  const [value, setValue] = useState(initvalue);
  return {
    value,
    onChange: (e) => setValue(e.target.value)
  }
}
