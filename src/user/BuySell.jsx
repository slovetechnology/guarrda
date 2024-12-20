import React from 'react'
import Formbutton from '../components/Formbutton'
import ChainBox from '../components/user/ChainBox'
import gimg12 from "assets/gimg12.svg"

function BuySell() {
    return (
        <div>
            <div className="mt-8">
                <div className="bg-white rounded-xl dark:bg-subdark border dark:border-subdark w-11/12 mx-auto lg:w-10/12 py-16">
                    <div className="w-11/12 max-w-xl mx-auto">
                        <div className="text-center dark:text-zinc-200 font-bold text-2xl mb-5">Buy & Sell</div>
                        <div className="mb-10"> <ChainBox title='Amount' tag="country" readOnly={false} /> </div>
                        <div className="w-fit mx-auto mb-10">
                            <img src={gimg12} alt="" className="size-5" />
                        </div>
                        <div className="mb-10">
                            <ChainBox tag="coin" title="I want" readOnly={true} balance={true} />
                            <div className="font-medium text-slate-600 dark:text-zinc-300">Payment partner</div>
                        </div>
                        <div className="mt-20">
                            <Formbutton title="Buy" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuySell
