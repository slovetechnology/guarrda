import React, { useState } from 'react'
import UserBoard from '../components/user/UserBoard'
import Forminput from '../components/Forminput'
import { SlArrowDown, SlStar } from 'react-icons/sl'
import Formbutton from '../components/Formbutton'
import gimg9 from "assets/gimg9.svg"
import gimg13 from "assets/gimg13.svg"
import {LuCopy} from "react-icons/lu"
import { FaCheck } from 'react-icons/fa6'


function SellCrypto() {
    const [screen, setScreen] = useState(1)

    function NextScreen() {
        if(screen === 3) return setScreen(1)
        setScreen(prev => prev + 1)
    }
    if (screen === 1) return (
        <UserBoard>
            <div className="bg-white dark:bg-subdark border-x border-b dark:border-maindark rounded-b-lg">
                <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-7 pt-10 pb-32">
                    <div className="lg:col-span-4">
                        <form>
                            <div className="">
                                <div className="text-primary text-sm">From</div>
                                <Forminput />
                            </div>
                            <div className="">
                                <div className="text-primary text-sm">To</div>
                                <Forminput />
                            </div>
                            <div className="">
                                <div className="text-primary text-sm flex items-center gap-2">Amount USD <SlArrowDown /> </div>
                                <Forminput />
                            </div>
                            <div className="flex items-center gap-2 p-2 text-sm">
                                <div className="text-zinc-500">Available</div>
                                <div className="text-primary">0 USD</div>
                            </div>
                            <div className="flex items-center gap-2 p-2 text-sm">
                                <div className="text-zinc-500">Network fee</div>
                                <div className="text-primary">---</div>
                            </div>
                            <div className="border-t dark:border-slate-600 px-3 pt-5">
                                <div className="grid grid-cols-2">
                                    <div className="text-sm text-zinc-500 dark:text-zinc-300">Step {screen} of 3</div>
                                    <div className=""> <Formbutton title="Next" onClick={NextScreen} /> </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="lg:col-span-3">
                        <div className="flex flex-col mt-20 lg:mt-0 items-center justify-center gap-10 text-center h-3/5 w-full">
                            <img src={gimg9} alt="" className="w-[12rem] h-auto" />
                            <div className="text-zinc-400 dark:text-zinc-300">Instantly send your coins or tokens</div>
                        </div>
                    </div>
                </div>
            </div>
        </UserBoard>
    )
    if (screen === 2) return (
        <UserBoard>
            <div className="bg-white dark:bg-subdark border-x border-b dark:border-maindark rounded-b-lg dark:text-zinc-200">
                <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-7 pt-10 pb-32">
                    <div className="lg:col-span-4">
                        <div className="text-center text-xl dark:text-zinc-300">Are you sure you want to</div>
                        <div className="text-center text-2xl dark:text-primary text-primary border-b pb-5 font-bold mt-2">Send 0.004040303BTC</div>
                        <div className="grid grid-cols-2 gap-2 py-3">
                            <div className="">
                                <div className="">You will send</div>
                                <div className="">Evaluation</div>
                            </div>
                            <div className="">
                                <div className="text-right break-words font-medium">0.0004940303023BTC</div>
                                <div className="text-right break-words font-medium">90 USD</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-3">
                            <div className="">
                                <div className="">From wallet</div>
                                <div className="">address</div>
                            </div>
                            <div className="">
                                <div className="text-right break-words font-medium">bitcoin</div>
                                <div className="text-right break-words font-medium">rghrgf8fj02fu8j4fijeoifj3ofij3f9jf0f90f9jfijfirjf0f9j30f9j0fjf09f</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-3">
                            <div className="">
                                <div className="">To address</div>
                            </div>
                            <div className="">
                                <div className="text-right break-words font-medium">rghrgf8fj02fu8j4fijeoifj3ofij3f9jf0f90f9jfijfirjf0f9j30f9j0fjf09f</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-3">
                            <div className="">
                                <div className="">Network fee</div>
                                <div className="">Evaluation</div>
                            </div>
                            <div className="">
                                <div className="text-right break-words font-medium">0.0004940303023BTC</div>
                                <div className="text-right break-words font-medium">90 USD</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-3">
                            <div className="">
                                <div className="">will receive</div>
                            </div>
                            <div className="">
                                <div className="text-right break-words font-medium">0.0004940303023BTC</div>
                            </div>
                        </div>
                        <div className="border-t dark:border-slate-600 px-3 pt-5">
                            <div className="grid grid-cols-2">
                                <div className="text-sm text-zinc-500 dark:text-zinc-300">Step {screen} of 3</div>
                                <div className=""> <Formbutton title="Confirm" onClick={NextScreen} /> </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-3">
                        <div className="flex flex-col mt-20 lg:mt-0 items-center justify-center gap-10 text-center h-3/5 w-full">
                            <img src={gimg9} alt="" className="w-[12rem] h-auto" />
                            <div className="text-zinc-400 dark:text-zinc-200">Instantly send your coins or tokens</div>
                        </div>
                    </div>
                </div>
            </div>
        </UserBoard>
    )
    if (screen === 3) return (
        <UserBoard>
            <div className="bg-white dark:bg-subdark border-x border-b dark:border-maindark rounded-b-lg dark:text-zinc-200">
                <div className='pt-10'>
                    <div className="bg-green-600 w-fit h-fit rounded-full p-3 text-white mb-7 text-3xl mx-auto"> <FaCheck /> </div>
                    <div className="text-center text-lg">Success!</div>
                    <div className="text-center text-zinc-400 text-lg mb-7">Transaction was sent</div>
                    <div className="border dark:border-zinc-500 mb-7 rounded-lg flex items-center flex-col text-center gap-3 w-11/12 lg:w-4/6 p-4 mx-auto">
                    <div className="text-2xl font-bold">0.000594040303BTC</div>
                    <div className="text-base dark:text-zinc-400 font-bold">90 USD</div>
                    </div>
                    <div className="border dark:border-zinc-500 mb-7 rounded-lg flex items-center text-center justify-between gap-3 w-11/12 lg:w-4/6 p-4 mx-auto">
                        <div className="text-primary">Hash</div>
                        <div className="">59834304.....393849248294822</div>
                        <div className="flex items-center gap-4">
                        <div className="text-primary text-2xl cursor-pointer"> <LuCopy /> </div>
                        <div className="text-primary"> <img src={gimg13} alt="" className="size-5" /> </div>
                        </div>
                    </div>
                    <div className="text-center">Would you like to rate us?</div>
                    <div className="flex flex-row items-center gap-1 justify-center mt-4 mb-5">
                        {new Array(5).fill(0).map((_, index) => (
                            <SlStar key={index} className={`text-2xl text-zinc-400`} />
                        ))}
                    </div>
                    <div className="border-t dark:border-maindark pt-5 mb-20">
                        <div className="w-full lg:w-2/6 mx-auto">
                            <button className="py-2 px-5 rounded-md w-full text-primary border border-primary">Send another transaction</button>
                        </div>
                    </div>
                </div>
            </div>
        </UserBoard>
    )
}

export default SellCrypto