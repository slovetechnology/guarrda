import React from 'react'
import { SlArrowDown, SlExclamation, SlMagnifier } from 'react-icons/sl'
import gimg6 from "assets/gimg6.png"

const TableHeaders = [
    "crypto",
    "",
    "",
    "",
    "",
    "",
    "",
    "lockup-period",
    "apy",
    "min amount",
]

function Earn() {
  return (
    <div>
        <div className="mt-8">
            <div className="bg-white rounded-t-xl dark:bg-subdark border dark:border-subdark w-11/12 mx-auto max-w-[65rem]">
            <div className="">
                <div className="flex items-center justify-between gap-5">
                    <div className="pt-7 pb-4 text-sm lg:text-lg px-3 lg:px-9 border-b-4 border-primary font-semibold dark:text-zinc-300">Start to Earn</div>
                    <div className="flex items-center border-b rounded-lg mr-2 lg:mr-7 dark:border-zinc-400">
                        <SlMagnifier className='text-base lg:text-xl dark:text-zinc-400' />
                        <input type="text" placeholder='Search' className="w-full dark:placeholder:text-zinc-400 dark:text-zinc-400 bg-transparent p-2 border-none outline-none" />
                    </div>
                </div>
               <div className="overflow-x-auto scrollsdown">
                <div className="">
                <table className="table w-full table-auto">
                    <thead>
                        <tr className='bg-zinc-50 dark:bg-maindark'>
                            {TableHeaders.map((item, index) => (
                                <td key={index} className='' colSpan={0}>
                                    <div className={`flex items-center gap-1 truncate p-5 font-medium uppercase text-sm ${index === TableHeaders.length - 1 ? 'text-primary w-fit ml-auto' : 'text-zinc-500'}`}>
                                    {item && index !== 1 && <SlArrowDown className='text-xs' />} {item} {index === TableHeaders.length - 2 && <SlExclamation className='text-xs text-zinc-500' />}
                                    </div>
                                </td>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {new Array(20).fill(0).map((item, index) => (
                            <tr className='border-b border-slate-200/60 dark:border-maindark hover:bg-slate-50 dark:hover:bg-maindark dark:text-zinc-300 transition-all' key={index}>
                                <td className='py-3 px-6 text-base'>
                                <div className="flex items-center gap-2 dark:text-white">
                                        <img src={gimg6} alt="" className="size-10 rounded-full object-cover" />
                                        <div className="flex items-center gap-2">
                                            <div className="font-medium text-lg">Bitcoin</div>
                                            <sup className="uppercase text-zinc-500 dark:text-zinc-300">btc</sup>
                                        </div>
                                    </div>
                                </td>
                                <td className='py-3 px-6 text-base'></td>
                                <td className='py-3 px-6 text-base'></td>
                                <td className='py-3 px-6 text-base'></td>
                                <td className='py-3 px-6 text-base'></td>
                                <td className='py-3 px-6 text-base'></td>
                                <td className='py-3 px-6 text-base'></td>
                                <td className='py-3 px-6 text-base'>18 hours</td>
                                <td className='py-3 px-6 text-base font-bold'> up to 9%</td>
                                <td className='py-3 px-6 text-base'>
                                    <div className="text-right text-sm">0 EUR</div>
                                    <div className="text-right text-sm">10 NOV</div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
               </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Earn


