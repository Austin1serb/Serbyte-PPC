import { useCallback, useEffect } from "react"

export function useUI<T extends string | boolean | number>(
  initialValue: T,
  explicitKey: string
): T extends boolean ? [T, (value: T) => void, () => void] : [T, (value: T) => void] {
  const key = explicitKey

  const setValue = useCallback(
    (value: T) => {
      if (typeof window !== "undefined") {
        document.body.dataset[key] = String(value)
      }
    },
    [key]
  )

  const toggle = useCallback(() => {
    if (typeof window !== "undefined") {
      const current = document.body.dataset[key] === "true"
      document.body.dataset[key] = String(!current)
    }
  }, [key])

  useEffect(() => {
    setValue(initialValue)
  }, [])

  // Return toggle for booleans
  if (typeof initialValue === "boolean") {
    return [initialValue, setValue, toggle] as any
  }

  return [initialValue, setValue] as any
}

// Usage:
