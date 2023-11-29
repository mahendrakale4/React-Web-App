import { useEffect, useState } from "react"

export function useLocalStorage(key, initialvalue) {
  const [value, setValue] = useState(() => {
    const localValue = localStorage.getItem(key)
    if (localValue == null) {
      if (typeof initialvalue === "function") {
        return initialvalue()
      } else return initialvalue
    } else {
      return JSON.parse(localValue)
    }
  })
  useEffect(() => {
    if (value === undefined) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }, [value ,key])
  return [value, setValue]
}
