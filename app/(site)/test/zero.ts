import { useCallback, useEffect } from "react"

// Overload for boolean type - returns toggle function
export function useUI<T extends boolean>(initialValue: T, explicitKey: string): [T, (value: T) => void, () => void]

// Overload for string/number types - no toggle function
export function useUI<T extends string | number>(initialValue: T, explicitKey: string): [T, (value: T) => void]

// Implementation
export function useUI<T extends string | boolean | number>(
  initialValue: T,
  explicitKey: string
): [T, (value: T) => void] | [T, (value: T) => void, () => void] {
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
    return [initialValue, setValue, toggle]
  }

  return [initialValue, setValue]
}
