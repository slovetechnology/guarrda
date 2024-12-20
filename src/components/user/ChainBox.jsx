import React, { useEffect, useState } from 'react'
import gimg6 from "assets/gimg6.png"
import { FaCaretDown } from 'react-icons/fa'
import ModalSelector from './ModalSelector'
import { CoinFlags, CountriesTags } from '../../utils/utils'
import { useSelector } from 'react-redux'

function ChainBox({ readOnly, textColor, tag, box=false, balance=false, title }) {
    const { monies, wallets, profile, money } = useSelector(state => state.data)
    const [open, setOpen] = React.useState(false)
    const [active, setActive] = useState({})
    const [forms, setForms] = useState('')

    useEffect(() => {
        (() => {
            if(tag === 'country') {
                if(!active?.short) {
                    const item = CountriesTags.find(ele => ele.short === monies[0]?.short)
                    const data = {
                        ...monies[0],
                        image: item.image
                    }
                    setActive(data)
                }
            }
            if(tag === 'coin') {
                if(!active?.short) {
                    const item = CoinFlags.find(ele => ele.short === wallets[0]?.short)
                    const data = {
                        ...wallets[0],
                        image: item.image
                    }
                    setActive(data)
                }
            }
        })()
    }, [])

    function DataSelected(data) {
        setActive(data)
    }
    return (
        <div className='flex items-center border rounded-md border-zinc-500 dark:text-zinc-300'>
            <div className="border-r border-zinc-400 rounded-tl-xl rounded-bl-xl p-4 rounded-x-lg w-1/2 relative">
                <div className="absolute py-1 px-2 bg-white dark:bg-subdark -top-3 left-3.5 text-xs">{title}</div>
                <div 
                onClick={() => setOpen(true)}
                className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-2">
                        <img src={active?.image} alt="" className="size-9" />
                        <div className="">
                            <div className={`text-sm capitalize font-bold dark:text-primary ${textColor}`}>{active?.name}</div>
                            <div className="text-xs uppercase font-bold">{active?.short}</div>
                        </div>
                    </div>
                    <div className=""> <FaCaretDown className='text-xs text-zinc-500' /> </div>
                </div>
                <ModalSelector
                    Options={tag === 'coin' ? wallets : monies}
                    source={tag === 'coin' ? CoinFlags : CountriesTags}
                    closeview={() => setOpen(false)}
                    open={open}
                    box={box}
                    balance={balance}
                    tops="top-[4.4rem]"
                    title={tag === 'coin' ? 'Search wallet' : 'Search for quote currency'}
                    setOpen={setOpen}
                    DataSelected={DataSelected} />
            </div>
            <div className={`rounded-tr-xl rounded-br-xl p-4 w-1/2 ${readOnly ? 'dark:bg-maindark cursor-pointer' : ''}`}>
                <div className="flex items-center justify-end gap-5">
                    <div className="text-xl font-extrabold">
                        <input 
                        value={forms}
                        onChange={e => setForms(e.target.value)}
                        readOnly={readOnly} 
                        type="text" 
                        placeholder='0'
                        className={`bg-transparent w-full border-none outline-none p-1 text-right ${readOnly ? 'cursor-pointer' : ''}`} />
                    </div>
                    <div className="uppercase font-extrabold text-zinc-400">{active?.short}</div>
                </div>
            </div>
        </div>
    )
}

export default ChainBox