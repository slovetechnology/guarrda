import React, { useState } from 'react'
import UserBoard from '../components/user/UserBoard'
import gimg43 from "assets/gimg43.svg"
import gimg7 from "assets/gimg7.svg"
import Formbutton from '../components/Formbutton'
import { Link } from 'react-router-dom'
import Forminput from '../components/Forminput'


function CreateInvoice() {
    const [view, setView] = useState(false)
    return (
        <UserBoard>
            <div className="bg-white dark:bg-subdark border-x border-b dark:border-maindark rounded-b-lg dark:text-zinc-200">
                <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-7 pt-10 pb-32">
                    <div className="lg:col-span-4">
                        {!view && <>
                            <div className="text-black">Before you proceed</div>
                            <div className="mt-6">Requests are based on FIO Protocol.</div>
                            <div className="mt-6">Firstly, you need to buy a human-readable FIO address. This is a requirement presented by FIO Protocol.</div>
                            <div className="mt-6 mb-6">No worries: we are here to help! Just click “Get FIO address” and follow 4 simple steps</div>
                            <Formbutton onClick={() => setView(true)} title="Get FIO address" />
                            <div className="flex flex-wrap items-center mt-6 gap-2">
                                <div className="text-primary">What is a FIO address and how does it work</div>
                                <img src={gimg7} alt="" className="size-4" />
                            </div>
                        </>}
                        {view && <>
                            <div className="text-primary text-sm font-bold">What is a FIO address?</div>
                        <div className="mt-6">FIO Address is a human-readable identifier that eliminates the need to see blockchain public addresses.</div>
                        <div className="mt-6">Registration of a FIO Address also allows you to send and receive encrypted payment requests.</div>
                        <div className="flex flex-wrap items-center mt-6 gap-2">
                            <div className="">Read more about FIO in our <Link to="" className='text-primary'>Support Center</Link> </div>
                            <img src={gimg7} alt="" className="size-4" />
                        </div>
                            <div className="text-primary font-bold mt-10">Your FIO wallet</div>
                            <Forminput />
                            <div className="text-primary dark:bg-primary/10 bg-primary/10 rounded-lg py-2.5 px-3 text-sm mt-7">FIO Foundation welcomes new users with a limited address giveaway! Get your first FIO address</div>
                            <div className="border-t dark:border-maindark pt-8 mt-8 grid grid-cols-1 md:grid-cols-3">
                                <div className="md:col-span-1"></div>
                                <div className="md:col-span-2"> <a className='bg-primary text-white py-3 px-4 rounded-md' href="https://reg.fioprotocol.io/address/guardafree?publicKey=FIO699KdcX5yrJdoyqzYvYi6pWLouDWRFz9aUPdSB9tS2D6RwK6fp" rel="noreferrer" target="_blank">Get free FIO address</a> </div>
                            </div>
                        </>}
                    </div>
                    <div className="lg:col-span-3">
                        <div className="flex flex-col mt-20 lg:mt-0 items-center justify-center gap-10 text-center h-3/5 w-full">
                            <img src={gimg43} alt="" className="w-[12rem] h-auto" />
                            <div className="text-zinc-400 dark:text-zinc-200">Manage your human-readable address</div>
                        </div>
                    </div>
                </div>
            </div>
        </UserBoard>
    )
}

export default CreateInvoice