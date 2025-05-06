import { useEffect } from "react"
import { useRAFstate } from "./useRAFstate"

export function on<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T["addEventListener"]> | [string, EventListenerOrEventListenerObject | null, unknown]
): void {
  if (obj && obj.addEventListener) {
    obj.addEventListener(...(args as Parameters<HTMLElement["addEventListener"]>))
  }
}

export function off<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T["removeEventListener"]> | [string, EventListenerOrEventListenerObject | null, unknown]
): void {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(...(args as Parameters<HTMLElement["removeEventListener"]>))
  }
}

// Define the type for options that can be passed to the hook
interface Options {
  initialWidth?: number // Initial width of the window (Default value is Infinity)
  initialHeight?: number // Initial height of the window (Default value is Infinity)
  onChange?: (width: number, height: number) => void // Callback function to execute on window resize (optional)
}
export const isClient = typeof window !== "undefined"

const useWindowSize = ({ initialWidth = Infinity, initialHeight = Infinity, onChange }: Options = {}) => {
  // Use the useRafState hook to maintain the current window size (width and height)
  const [state, setState] = useRAFstate<{ width: number; height: number }>({
    width: isClient ? window.innerWidth : initialWidth,
    height: isClient ? window.innerHeight : initialHeight,
  })
  useEffect(() => {
    if (!isClient) return

    let ticking = false

    const handler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const width = window.innerWidth
          const height = window.innerHeight

          setState({ width, height })
          if (onChange) onChange(width, height)

          ticking = false
        })
        ticking = true
      }
    }

    on(window, "resize", handler)
    return () => off(window, "resize", handler)
  }, [])

  // Return the current window size (width and height)
  return state
}

export default useWindowSize
