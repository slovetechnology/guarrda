import React, { useEffect, useState } from 'react'
import { FaCaretDown, FaMagnifyingGlass, FaPlus } from "react-icons/fa6";
import { IoFilter, IoSettingsOutline } from "react-icons/io5"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import gimg6 from "assets/gimg6.png"
import { PiX } from 'react-icons/pi';
import { SlMagnifier, SlMenu } from 'react-icons/sl';
import gimg44 from "assets/gimg44.svg"
import { useDispatch, useSelector } from 'react-redux';
import { CoinFlags, ConvertCoinToCurrency, CountriesTags } from '../../utils/utils';
import { dispatchActiveWallet, dispatchMoney } from '../../store/reducer';
import CurrenciesData from '../../utils/CurrenciesData';
import ModalSelector from './ModalSelector';

const TransferOption = [
    { title: 'receive', link: '/app/receive', link2: '/app' },
    { title: 'sell', link: '/app/sell', link2: '/app/sell' },
    { title: 'FIO address', link: '/app/fio/invoice-create', link2: '/app/fio/invoice-create' },
]


function RenderSideViews({ height }) {
    const { profile, wallets, money, monies } = useSelector(state => state.data)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const [isSearch, setIsSearch] = useState(false)

    function HandleSelection(item, stats) {
        const data = {
            address: item?.address ?? "",
            balance: item?.balance ?? 0,
            currency: null,
            id: item?.id ?? "",
            userid: item?.userid ?? profile?.id,
            wallet: item?.wallet ?? item?.short
        }
        dispatch(dispatchActiveWallet(data))
        navigate('/app/receive')
    }

    function DataSelected(data) {
        dispatch(dispatchMoney(data))
    }

    return (
        <>
            <div className="py-3 px-5 border-b dark:border-maindark dark:text-zinc-300">
               {isSearch && <div className="flex items-center gap-2">
                    <div className="border-2 border-maindark hover:border-primary rounded-md p-1 flex items-center gap-1">
                        <FaMagnifyingGlass className='text-lg' />
                        <input type="text" placeholder='Search' className="border-none outline-none bg-transparent w-full" />
                    </div>
                    <button onClick={() => setIsSearch(false)} className="py-2 px-4 text-primary">Cancel</button>
                </div>}
                {!isSearch && <>
                    <div className="grid grid-cols-2 gap-3 relative">
                        <div className="flex items-center gap-2">
                            <div className="font-extrabold text-xl">0.00</div>
                            <div
                                onClick={() => setOpen(!open)}
                                className="uppercase flex text-sm cursor-pointer items-center gap-1 bg-zinc-200 dark:bg-zinc-800 rounded-full py-1 px-2">{money?.short} <FaCaretDown className='text-xs' /> </div>
                        </div>
                        <div className="text-xl text-slate-400 flex flex-row items-center gap-3 justify-end">
                            <button onClick={() => setIsSearch(true)}> <FaMagnifyingGlass /> </button>
                            <button> <IoFilter /> </button>
                            <button> <FaPlus /> </button>
                            <button> <IoSettingsOutline /> </button>
                        </div>
                        <ModalSelector
                            Options={monies}
                            source={CountriesTags}
                            closeview={() => setOpen(false)}
                            open={open}
                            box={false}
                            tops="top-[2.5rem]"
                            title='Search for quote currency'
                            setOpen={setOpen}
                            DataSelected={DataSelected} />
                    </div>
                    <div className="text-xs text-zinc-400 mt-2">16 wallets | 0 hidden | 0 watch only | 0 ledger</div>
                </>}
            </div>
            <div className={`${height} overflow-y-auto scrolls`}>
                <div className="flex flex-col">
                    {profile?.wallets?.map((item, index) => {
                        const coin = CoinFlags.find(ele => ele.short === item?.wallet)
                        const walls = wallets.find(ele => ele.short === item?.wallet)
                        const curr = CurrenciesData.find(ele => ele.abbreviation === money?.short?.toUpperCase())

                        return (
                            (
                                <div
                                    onClick={() => HandleSelection(item, true)}
                                    className='flex items-center cursor-pointer justify-between p-3 hover:bg-zinc-100 dark:hover:bg-maindark/60 transition-all' key={index}>
                                    <div className="flex items-center gap-2 dark:text-white">
                                        <div> <img src={coin?.image} alt="" className="size-8" /> </div>
                                        <div className="flex items-center gap-2">
                                            <div className="font-semibold text-lg capitalize">{walls.name}</div>
                                            <sup className="uppercase text-zinc-500 dark:text-zinc-300">{walls?.short}</sup>
                                        </div>
                                    </div>
                                    <div className="text-right dark:text-white">
                                        <div className="font-semibold text-right">{item.balance}</div>
                                        <div className="flex items-center justify-end"> <div dangerouslySetInnerHTML={{ __html: curr?.symbol }} /> {ConvertCoinToCurrency({ walls, money, item })}</div>
                                    </div>
                                </div>
                            )
                        )
                    })}
                    <div className="font-bold uppercase p-3 dark:text-zinc-200">add coins</div>
                    {wallets?.map((item, index) => {
                        const coin = CoinFlags.find(ele => ele.short === item?.short)
                        const existings = []
                        profile?.wallets?.forEach(ele => {
                            return existings.push(ele.wallet)
                        })
                        if (!existings.includes(item.short)) return (
                            (
                                <div
                                    onClick={() => HandleSelection(item, false)}
                                    className='flex items-center cursor-pointer justify-between p-3 hover:bg-zinc-100 dark:hover:bg-maindark/60 transition-all' key={index}>
                                    <div className="flex items-center gap-2 dark:text-white">
                                        <div> <img src={coin?.image} alt="" className="size-8" /> </div>
                                        <div className="flex items-center gap-2">
                                            <div className="font-semibold text-lg capitalize">{item.name}</div>
                                            <sup className="uppercase text-zinc-500 dark:text-zinc-300">{item?.short}</sup>
                                        </div>
                                    </div>
                                    <div></div>
                                </div>
                            )
                        )
                    })}
                </div>
            </div>
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-8 dark:text-zinc-300 text-xs items-center border dark:border-maindark rounded-t-xl p-3">
                    <div className="md:col-span-5 flex gap-2">
                        <div className="">
                            <img src={gimg44} alt="" className="w-4 h-auto" />
                        </div>
                        <div className="">
                            <div className='text-primary font-bold text-sm'>FIO addresses</div>
                            <div>A single address for wallets and easy invoicing.</div>
                        </div>
                    </div>
                    <div className="md:col-span-3 w-fit md:ml-auto">
                        <Link to={TransferOption[2].link} className='border truncate border-primary py-2 px-3 rounded-md text-primary'>Get address</Link>
                    </div>
                </div>
            </div>
        </>
    )
}


function UserBoard({ children }) {
    const { pathname } = useLocation()
    const [view, setView] = useState(false)
    const SetView = view ? PiX : SlMenu
    const [loaded, setLoaded] = useState(false)


    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 100);
    }, [])
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-9 w-11/12 mx-auto lg:w-10/12 mt-8 lg:gap-10">
                <div className="lg:col-span-3 hidden lg:block h-fit border dark:border-maindark rounded-lg bg-white dark:bg-subdark sticky top-0 left-0">
                    <RenderSideViews height="h-[70dvh]" />
                </div>
                <div className="lg:col-span-6">
                    <div className="mb-3 lg:hidden">
                        <div className="w-fit ml-auto"> <SetView onClick={() => setView(!view)} className='text-2xl cursor-pointer dark:text-zinc-300' /> </div>
                        {view && <RenderSideViews height="h-[50dvh]" />}
                    </div>
                    <div className=" bg-white dark:bg-subdark border-x border-t dark:border-maindark rounded-t-lg">
                        <div className="border-b dark:border-maindark flex flex-row items-center">
                            {TransferOption.slice(0, 2).map((item, index) => (
                                <Link key={index} className={`py-4 capitalize px-6 text-base text-slate-600 dark:text-white border-b-[3px] ${[item.link, item.link2].includes(pathname) ? 'border-primary' : 'border-transparent hover:border-bg dark:hover:border-primary/30'} transition-all`} to={item.link}>{item.title}</Link>
                            ))}
                            {pathname === TransferOption[2].link && <Link className={`py-4 capitalize px-6 text-base text-slate-600 dark:text-white border-b-[3px] border-primary transition-all`} to={TransferOption[2].link}>{TransferOption[2].title}</Link>}
                        </div>
                    </div>
                    {loaded ? children : <div className="bg-white dark:bg-subdark animate-pulse rounded-b-xl h-[43rem]"></div> }
                </div>
            </div>
        </>
    )
}

export default UserBoard
