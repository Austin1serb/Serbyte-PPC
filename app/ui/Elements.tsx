import clsx from "clsx"
import { JSX } from "react"

type HeadingProps<T extends keyof JSX.IntrinsicElements> = React.ComponentPropsWithoutRef<T> & {
  children: React.ReactNode
}

export const H2: React.FC<HeadingProps<"h2">> = ({ children, ...rest }) => {
  return (
    <h2 {...rest} className={clsx("text-4xl md:leading-13 tracking-tighter text-slate-900 md:text-5xl lg:leading-15 lg:text-6xl", rest.className)}>
      {children}
    </h2>
  )
}

export const H3: React.FC<HeadingProps<"h3">> = ({ children, ...rest }) => {
  return (
    <h3 {...rest} className={clsx("text-2xl leading-8 font-medium tracking-tight text-slate-800 md:text-3xl", rest.className)}>
      {children}
    </h3>
  )
}

type HTMLElementTag = keyof HTMLElementTagNameMap

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: HTMLElementTag
  size?: "sm" | "base" | "lg" | "xl"
}

export function Text({ as: Component = "p", size = "base", className = "", ...props }: TextProps) {
  const sizeClasses = {
    sm: "text-sm leading-tight md:text-base",
    base: "text-base leading-tight md:text-lg",
    lg: "text-lg leading-6 md:text-xl",
    xl: "text-xl leading-6 md:text-2xl",
  }

  return <Component {...props} className={`${sizeClasses[size]} text-slate-600 tracking-tight ${className}`} />
}

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: HTMLElementTag
  size?: "sm" | "base" | "lg" | "xl"
}

export function Typography({ as: Component = "article", size = "base", className = "", ...props }: TypographyProps) {
  const sizeClasses = {
    sm: "text-sm leading-tight md:text-base",
    base: "text-base leading-tight md:text-lg",
    lg: "text-lg leading-6 md:text-xl",
    xl: "text-xl leading-6 md:text-2xl",
  }
  return <Component {...props} className={`text-slate-600 ${sizeClasses[size]} ${className}`} />
}
