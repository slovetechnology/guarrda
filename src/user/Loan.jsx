import React, { useState } from 'react'
import ChainBox from '../components/user/ChainBox'
import Formbutton from '../components/Formbutton'
import { SlExclamation } from 'react-icons/sl'
import { FaCheck } from 'react-icons/fa6'
import gimg13 from "assets/gimg13.svg"
import { Link } from 'react-router-dom'
import { SlMagnifier } from 'react-icons/sl'

const TableHeaders = [
    "Loan amount",
    "Status",
    "date & time",
    "collateral",
    "price down limit",
    "apr",
]


const LoanOptions = [50, 65, 80, 90]

const Listings = [
    `No terms, KYC/documents and no need to sell your crypto.io`,
    `Your collateral is protected and insured.`,
    `Receive 3-level notifications in case of the risk of the collateral liquidation.`,
    `Service is provided by CoinRabbit.`,
]

function Loan() {
    const [selected, setSelected] = useState(LoanOptions[0])
    return (
        <div>
            <div className="mt-8 dark:text-zinc-400">
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-5 w-11/12 mx-auto max-w-[65rem]">
                    <div className="bg-white lg:col-span-4 rounded-xl dark:bg-subdark border dark:border-subdark py-16">
                        <div className="w-11/12 mx-auto">
                            <div className=" dark:text-zinc-200 font-bold text-2xl mb-5">Loan Crypto</div>
                            <div className="mb-10">
                            <ChainBox tag="coin" readOnly={true} balance={true} title="Collateral amount" />
                                <div className="text-xs text-right mt-1 dark:text-zinc-400">Min | All</div>
                            </div>
                            <div className="mb-10">
                            <ChainBox tag="coin" readOnly={true} balance={true} title="I want to borrow" />
                                <div className="flex items-center justify-end gap-2 mt-3">
                                    <div className="flex items-center gap-1 text-sm mr-10">
                                        LTV<SlExclamation />
                                    </div>
                                    {LoanOptions.map((item, index) => (
                                        <button key={index} onClick={() => setSelected(item)} className={`py-[0.1rem] text-sm px-2 rounded-md border ${selected === item ? 'border-zinc-600 text-zinc-600 dark:text-zinc-300 dark:border-zinc-300' : 'border-zinc-300 text-zinc-300 dark:border-zinc-600 dark:text-zinc-600'} transition-all`}>{item}</button>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-[#edf3ff] dark:bg-primary/10 mt-[8rem] mb-[3rem] text-sm text-primary py-3.5 px-5 rounded-lg">The calculated amount 0 xrp [xrp] is less than min amount 30 usdt [trx]</div>
                            <div className="mt-20 grid grid-cols-3">
                                <div></div>
                                <div></div>
                                <Formbutton title="Buy" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-3">
                        <div className="bg-white dark:bg-subdark border dark:border-maindark rounded-lg py-16 px-10 text-base mb-6">
                        <gecko-coin-price-chart-widget locale="en" transparent-background="true" coin-id="ripple" initial-currency="eur"></gecko-coin-price-chart-widget>
                        </div>

                        <div className="bg-white dark:bg-subdark dark:border-maindark border dark:text-zinc-300 rounded-lg py-16 px-10 text-base">
                            <div className="mb-6 font-semibold text-lg">Use crypto as a collateral asset to recieve 50% of it in stablecoin.</div>
                            <div className="">
                                {Listings.map((item, index) => (
                                    <div key={index} className='flex items-center gap-3 py-2'> <FaCheck className='text-green-600 text-lg' /> {item}</div>
                                ))}
                                <Link to="" className="text-primary font-semibold flex items-center gap-3 mt-3"> <img src={gimg13} alt="" className="size-4" /> Learn more in our Help Center</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="bg-white rounded-t-xl dark:bg-subdark border dark:border-subdark w-11/12 mx-auto lg:w-10/12">
                        <div className="">
                            <div className="grid grid-cols-1 lg:grid-cols-7 items-center gap-5">
                                <div className="pt-7 lg:col-span-3 pb-4 text-lg px-9 font-semibold dark:text-zinc-300">Your Loans</div>
                                <div className="lg:col-span-4 flex items-center border rounded-md py-2 px-4 mr-7 dark:border-zinc-400">
                                    <SlMagnifier className='text-xl dark:text-zinc-400' />
                                    <input type="text" placeholder='Search' className="w-full dark:placeholder:text-zinc-400 dark:text-zinc-400 bg-transparent border-none outline-none" />
                                </div>
                            </div>
                           <div className="overflow-x-auto scrollsdown">
                            <div className="">
                            <table className="table w-full table-auto">
                                <thead>
                                    <tr className='bg-zinc-50 dark:bg-maindark'>
                                        {TableHeaders.map((item, index) => (
                                            <td key={index} className='' colSpan={0}>
                                                <div className={`text-sm truncate p-5 font-medium uppercase text-zinc-500`}>{item}</div>
                                            </td>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {new Array(5).fill(0).map((item, index) => (
                                        <tr className='border-b border-slate-200/60 dark:border-maindark hover:bg-slate-50 dark:hover:bg-maindark dark:text-zinc-300 transition-all' key={index}>
                                            <td className='py-3 px-6 text-sm'>Sample</td>
                                            <td className='py-3 px-6 text-sm'>Sample</td>
                                            <td className='py-3 px-6 text-sm'>Sample</td>
                                            <td className='py-3 px-6 text-sm'>Sample</td>
                                            <td className='py-3 px-6 text-sm'>Sample</td>
                                            <td className='py-3 px-6 text-sm'>Sample</td>
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
        </div>
    )
}

export default Loan

