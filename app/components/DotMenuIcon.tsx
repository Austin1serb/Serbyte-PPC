export const DotMenuIcon: React.FC = () => {
  return (
    <div className="dot-menu-icon relative flex w-6 justify-between py-1 bounce ">
      <span className="absolute top-0.5 left-0 duration-300" />
      <span className="absolute top-0.5 left-[9px] duration-300 [--delay:0.5s]" />
      <span className="absolute top-0.5 right-0 duration-300 [--delay:1s]" />
    </div>
  )
}
