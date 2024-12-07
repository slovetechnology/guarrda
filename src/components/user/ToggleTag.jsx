import React, { useState } from 'react'

function ToggleTag() {
    const [view, setView] = useState(false)
    function HandleToggler() {
        setView(!view)
    }
  return (
    <div onClick={() => HandleToggler()} className={`w-10 rounded-full h-5 ${view ? 'bg-green-500 dark:bg-green-500/60' : 'bg-zinc-200 dark:bg-maindark'} relative ml-auto cursor-pointer`}>
        <div className={`size-4 rounded-full bg-white dark:bg-subdark absolute top-[0.12rem] transition-all ${view ? 'right-[0.1rem]' : 'left-[0.1rem]'}`}></div>
    </div>
  )
}

export default ToggleTag