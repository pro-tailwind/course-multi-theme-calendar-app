/*
  ------------------------------
  TODO:
  1. Find and replace all instances of `indigo` 
  with our themable `primary` color.

  2. Add a `data-theme="candy"` attribute to 
  the parentmost element to check if our 
  theming strategy is working!
  ------------------------------
*/

export function BackgroundDecoration({ selectedDate }) {
  return (
    <div aria-hidden="true" className="background-split fixed inset-0 grid">
      {/* Left split */}
      <div className="bg-primary-600 relative col-span-2 overflow-hidden">
        <div className="border-primary-400 absolute -left-40 -bottom-40 hidden aspect-square w-[700px] rounded-full border-[110px] xl:block"></div>
      </div>
      {/* Right split */}
      <div className="bg-primary-500 relative col-span-2 overflow-hidden">
        <div className="border-primary-400 absolute -left-32 -top-32 hidden aspect-square w-[700px] rounded-full border-[110px] xl:block"></div>
        <div className="text-primary-500/50 xl:text-primary-600/50 absolute -bottom-16 -right-4 hidden text-[500px] font-extrabold tabular-nums leading-none lg:block">
          {selectedDate.day}
        </div>
      </div>
    </div>
  )
}
