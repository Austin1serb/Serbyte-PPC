import clsx from "clsx"

const DotMenuIcon: React.FC<{ className?: string; open: boolean }> = ({ className, open }) => {
  return (
    <div className={clsx("relative flex w-6 justify-between py-1", className)}>
      <span className={clsx("absolute top-0.5 left-0 duration-300", open ? "h-0.5 w-full rotate-45 rounded-full bg-black" : "bounce")} />
      <span className={clsx("absolute top-0.5 left-[9px] duration-300", open ? "opacity-0" : "bounce [--delay:0.5s]")} />
      <span className={clsx("absolute top-0.5 right-0 duration-300", open ? "h-0.5 w-full -rotate-45 rounded-full bg-black" : "bounce [--delay:1s]")} />
    </div>
  )
}
export default DotMenuIcon
