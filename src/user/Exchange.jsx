
import React from 'react'
import Formbutton from '../components/Formbutton'
import ChainBox from '../components/user/ChainBox'
import gimg12 from "assets/gimg12.svg"

function Exchange() {
    return (
        <div>
            <div className="mt-8">
                <div className="bg-white rounded-xl dark:bg-subdark border dark:border-subdark w-11/12 mx-auto max-w-[65rem] py-16">
                    <div className="w-11/12 max-w-xl mx-auto">
                        <div className="text-center dark:text-zinc-200 font-bold text-2xl mb-5">Buy & Sell</div>
                        <div className="mb-8"> <ChainBox textColor="text-primary" readOnly={false} /> </div>
                        <div className="w-fit mx-auto mb-8">
                            <img src={gimg12} alt="" className="size-5" />
                        </div>
                        <div className="mb-8">
                            <ChainBox textColor="text-primary" readOnly={true} />
                        </div>
                        <div className="mt-14">
                        <div className="flex items-center gap-1 text-xs text-zinc-500 mb-2 justify-center">
                                <div className="">Exchange rate: </div>
                                <div className="">---</div>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-zinc-500 mb-2 justify-center">
                                <div className="">Network fee: </div>
                                <div className="">---</div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <Formbutton title="Buy" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Exchange
