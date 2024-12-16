
import React, { useCallback, useEffect, useState } from 'react'
import gimg38 from "assets/gimg38.svg"
import gimg36 from "assets/gimg36.svg"
import Forminput from '../components/Forminput'
import Formbutton from '../components/Formbutton'
import { useSelector } from 'react-redux'
import { CoinFlags, returnError } from '../utils/utils'
import { Apis, geturl } from '../utils/Apis'
import Multiselection from '../components/Multiselection'
import img from "assets/gimg4.svg"


const TopMenu = [
    "Restore from Guarrda Backup",
    "Import from Currency",
    "Import Mnemonic",
]

function RestorewalletForm() {
    const { theme } = useSelector(state => state.data)
    const [active, setActive] = useState(TopMenu[0])
    const [currencies, setCurrencies] = useState([])
    const [country, setCountry] = useState("")
    const [error, setError] = useState("")


    const Fetchdata = useCallback(async () => {
        try {
            const response2 = await geturl(Apis.admin.all_wallet)
            return setCurrencies(response2.data)
        } catch (error) {
            returnError(error)
        }
    }, [])

    useEffect(() => { Fetchdata() }, [Fetchdata])

    function LoadContent(item) {
        setCountry(item)
        setError('')
    }

    return (
        <div className="w-11/12 mx-auto max-w-2xl bg-white dark:bg-subdark mt-7">
            <div className="grid grid-cols-3">
                {TopMenu.map((item, index) => (
                    <div
                        onClick={() => setActive(item)}
                        className={`border-b-2 text-sm text-center px-1 font-semibold cursor-pointer py-3 ${active === item ? 'border-primary' : ''}`}
                        key={index}>{item}</div>
                ))}
            </div>
            <div className=" px-9 py-4">
                {active === TopMenu[0] && <>
                    <div className="text-center font-bold text-xl dark:text-zinc-300">Restore</div>
                    <div className="text-center text-sm mt-6 mb-3 dark:text-zinc-300">You will be able to restore your wallet by using a Backup if you are a user of Guarda Wallet.</div>
                    <div className="max-w-md mx-auto ">
                        <div className="w-fit ml-auto mb-2 text-sm"> <button className="border border-primary text-primary py-1 px-4 rounded-md">Enter backup text</button> </div>
                        <div className="border border-dashed border-zinc-400 rounded-lg h-[15rem]">
                            <div className="flex flex-col items-center w-full h-full gap-3 justify-center">
                                <div className=""> <img src={theme === 'dark' ? gimg36 : gimg38} alt="" className="size-28" /> </div>
                                <div className="text-sm text-zinc-500">Drag and drop file or</div>
                                <div className=""> <button className="bg-green-500 py-1 text-sm px-5 rounded-md text-white">Browse</button> </div>
                            </div>
                        </div>
                        <Forminput placeholder="Enter password" />
                        <div className="w-2/5 mx-auto">
                            <Formbutton title="Restore" />
                        </div>
                    </div>
                </>}
                {active === TopMenu[1] && <>
                    <div className="font-bold text-xl dark:text-zinc-300">Import your funds</div>
                    <div className="text-sm mt-3 mb-3 dark:text-zinc-300">You can import the private keys from external wallets. This will allow you to receive, send, purchase and exchange crypto. Your private keys are held encrypted on this browser local storage, not by a company.</div>
                    <div className="bg-primary px-5 py-5 rounded-md">
                        <Multiselection source={CoinFlags} Options={currencies} defaultValue={country} error={error} LoadContent={LoadContent} />

                        <Forminput placeholder="Enter password" />

                        <div className="grid grid-cols-3 gap-5 mb-7 pt-6">
                            <div className="flex items-center gap-2">
                                <img src={img} alt="" className="size-4" />
                                <div className="text-xs text-white">Secure encryption</div>
                            </div>
                            <div></div>
                            <div className="">
                                <Formbutton title="Add wallet" className="!border-white !border" />
                            </div>
                        </div>
                    </div>
                </>}
                {active === TopMenu[2] && <>
                    <div className="text-center font-bold text-xl dark:text-zinc-300">Restore</div>
                    <div className="text-center text-sm mt-6 mb-3 dark:text-zinc-300">You will be able to restore your wallet by using a Backup if you are a user of Guarda Wallet.</div>
                    <div className="max-w-md mx-auto ">
                        <div className="w-fit ml-auto mb-2 text-sm"> <button className="border border-primary text-primary py-1 px-4 rounded-md">Enter backup text</button> </div>
                        <div className="border border-dashed border-zinc-400 rounded-lg h-[15rem]">
                            <div className="flex flex-col items-center w-full h-full gap-3 justify-center">
                                <div className=""> <img src={theme === 'dark' ? gimg36 : gimg38} alt="" className="size-28" /> </div>
                                <div className="text-sm text-zinc-500">Drag and drop file or</div>
                                <div className=""> <button className="bg-green-500 py-1 text-sm px-5 rounded-md text-white">Browse</button> </div>
                            </div>
                        </div>
                        <Forminput placeholder="Enter password" />
                        <div className="w-2/5 mx-auto">
                            <Formbutton title="Restore" />
                        </div>
                    </div>
                </>}
            </div>
        </div>
    )
}

export default RestorewalletForm