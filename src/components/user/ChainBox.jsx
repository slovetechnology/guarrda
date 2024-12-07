import React from 'react'
import gimg6 from "assets/gimg6.png"
import { FaCaretDown } from 'react-icons/fa'

function ChainBox({readOnly, textColor}) {
    return (
        <div className='flex items-center border rounded-md border-zinc-500 dark:text-zinc-300'>
            <div className="border-r border-zinc-400 rounded-tl-xl rounded-bl-xl p-4 rounded-x-lg w-1/2">
                <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src={gimg6} alt="" className="size-9" />
                    <div className="">
                        <div className={`font-semibold text-sm ${textColor}`}>US Dollar</div>
                        <div className="text-xs">USD</div>
                    </div>
                </div>
                <div className=""> <FaCaretDown className='text-xs text-zinc-500' /> </div>
                </div>
            </div>
            <div className={`rounded-tr-xl rounded-br-xl p-4 w-1/2 ${readOnly ? 'dark:bg-maindark cursor-pointer' : ''}`}>
                <div className="flex items-center justify-end gap-5">
                    <div className="text-xl font-extrabold">
                        <input readOnly={readOnly} type="text" value="960504049403" className={`bg-transparent w-full border-none outline-none p-1 text-right ${readOnly ? 'cursor-pointer' : ''}`} />
                    </div>
                    <div className="uppercase font-extrabold text-zinc-400">txr</div>
                </div>
            </div>
        </div>
    )
}

export default ChainBox