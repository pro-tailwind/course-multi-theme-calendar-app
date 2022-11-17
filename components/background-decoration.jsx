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
      <div className="relative col-span-2 overflow-hidden bg-indigo-600">
        <div className="absolute -left-40 -bottom-40 hidden aspect-square w-[700px] rounded-full border-[110px] border-indigo-400 xl:block"></div>
      </div>
      {/* Right split */}
      <div className="relative col-span-2 overflow-hidden bg-indigo-500">
        <div className="absolute -left-32 -top-32 hidden aspect-square w-[700px] rounded-full border-[110px] border-indigo-400 xl:block"></div>
        <div className="absolute -bottom-16 -right-4 hidden text-[500px] font-extrabold tabular-nums leading-none text-indigo-500/50 lg:block xl:text-indigo-600/50">
          {selectedDate.day}
        </div>
      </div>
    </div>
  )
}
