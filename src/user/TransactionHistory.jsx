import React from 'react'
import { Link } from 'react-router-dom'
import gimg8 from "assets/gimg8.svg"


function TransactionHistory() {
  return (
    <div className='w-11/12 max-w-[65rem] mx-auto'>
      <div className="bg-white dark:bg-subdark border dark:border-maindark rounded-lg mt-5 dark:text-white ">
                <div className="font-medium text-primary px-6 py-5">History</div>
                <div className="border-y dark:border-maindark grid grid-cols-6 text-sm">
                    <div className="flex items-center col-span-2 p-3 cursor-pointer">
                        <div className="text-zinc-500">Type: </div>
                        <div className="">All</div>
                    </div>
                    <div className="border-l dark:border-maindark col-span-4"> <input type="text" placeholder='Search by harsh, address' className="w-full outline-none border-none  bg-transparent p-3" /> </div>
                </div>
                <div className=" w-11/12 mx-auto lg:w-10/12">
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src={gimg8} alt="" className="size-[20rem]" />
                        <div className="">Top up your wallet or  <Link to="" className='text-primary'>share your public address</Link> </div>
                        <div className="">with somebody to get coins or tokens.</div>
                        <div className="mb-5 mt-8">
                            <Link to="" className='text-white bg-primary py-4 px-8 rounded-md'>Buy crypto</Link>
                        </div>
                        <div className="">
                            <button to="" className='text-primary py-4 px-8 rounded-md'>Load transactions</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default TransactionHistory