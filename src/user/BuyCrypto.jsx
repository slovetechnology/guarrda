import React, { useEffect } from 'react'
import { FaEllipsisV } from 'react-icons/fa';
import QRCode from 'react-qr-code';
import { Link } from 'react-router-dom';
import gimg5 from "assets/gimg5.svg"
import gimg7 from "assets/gimg7.svg"
import gimg8 from "assets/gimg8.svg"
import UserBoard from '../components/user/UserBoard';
import { useDispatch, useSelector } from 'react-redux';
import { CoinFlags, ConvertCoinToCurrency } from '../utils/utils';
import { dispatchActiveWallet } from '../store/reducer';


const CoinButtons = [
    { title: 'send', link: '/app/sell?fromWallet=49u48438tu340t340t93409340309' },
    { title: 'request', link: '/app/fio/invoice-create?walletTo=bdfe79e46550d9f18a23d27bcf4e2197' },
    { title: 'exchange', link: '/app/exchange?walletFrom=39953a36' },
    { title: 'buy', link: '/app/buy?walletTo=39953a36' },
]


function BuyCrypto() {
    const dispatch = useDispatch()
    const { activewallet, wallets, profile, money } = useSelector(state => state.data)
    const coin = CoinFlags.find(ele => ele.short === activewallet?.wallet)
    const walls = wallets.find(ele => ele.short === activewallet?.wallet)

    useEffect(() => {
        (() => {
            if(!activewallet?.id && profile?.id) {
                dispatch(dispatchActiveWallet(profile?.wallets[0]))
            }
        })()
    }, [])
    return (
        <UserBoard>

            <div className="bg-white dark:bg-subdark border-x border-b dark:border-maindark rounded-b-lg">
                <div className="w-11/12 mx-auto lg:w-10/12 py-10">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="text-base text-primary capitalize font-bold">{walls?.name}</div>
                        </div>
                        <div className="text-zinc-500"> <FaEllipsisV /> </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-7 mt-5 gap-4 md:gap-20 dark:text-white">
                        <div className="md:col-span-2">
                            <div className="p-2 rounded-md bg-white w-fit">
                                <QRCode value={`${activewallet?.address}`} className='h-[9rem] w-auto' />
                            </div>
                        </div>
                        <div className="md:col-span-5">
                            <div className="">Wallet balance:</div>
                            <div className="mb-6 mt-2">
                                <div className="font-bold uppercase">{activewallet?.balance}{walls?.short}</div>
                                <div className="font-semibold text-zinc-400 uppercase">{ConvertCoinToCurrency({walls, money, item: activewallet})}{money.short}</div>
                            </div>
                            <div className="">Wallet address:</div>
                            <div className="break-words">{activewallet?.address}</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-5">
                        <div className="lg:col-span-1"></div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5 lg:col-span-4">
                            {CoinButtons.map((item, index) => (
                                <Link key={index} to={item.link} className={`${index <= 1 ? 'border border-primary text-primary' : 'text-white bg-primary border border-primary'} py-2 px-5 rounded-md text-center capitalize text-sm`}>{item.title}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white dark:bg-subdark border dark:border-maindark rounded-lg mt-5 dark:text-white">
                <div className="grid grid-cols-1 items-center lg:grid-cols-6 w-11/12 mx-auto lg:w-10/12 py-10">
                    <div className="lg:col-span-4">
                        <div className="text-primary font-semibold flex items-center gap-1">Domain names with superpowers <img src={gimg5} alt="" className="size-5" /> </div>
                        <div className="text-sm mt-3 mb-1">Replace cryptocurrency addresses with a human readable name</div>
                        <Link to="" className='flex items-center gap-1 hover:underline text-primary'>How to use crypto domains?<img src={gimg7} alt="" className="size-3" /></Link>
                    </div>
                    <div className="lg:col-span-2 flex items-center justify-center">
                        <div className="w-fit ml-auto"><a href="https://unstoppabledomains.com/?irclickid=zg4WXzXAqxyIRukTHlSCwSkLUkDwegRPjXKy080&irpid=3512711&irgwc=1" target="_blank" rel='noreferrer' className='bg-primary text-white py-4 px-12 rounded-md'>Buy</a></div>
                    </div>
                </div>
            </div>
            <div className="bg-white dark:bg-subdark border dark:border-maindark rounded-lg mt-5 dark:text-white">
                <div className="font-medium text-primary px-6 py-5">Wallet transactions</div>
                <div className="border-y dark:border-maindark grid grid-cols-6 text-sm">
                    <div className="flex items-center col-span-2 p-3 cursor-pointer">
                        <div className="text-zinc-500">Type: </div>
                        <div className="">All</div>
                    </div>
                    <div className="border-l dark:border-maindark col-span-4"> <input type="text" placeholder='Search by harsh, address' className="w-full outline-none border-none  bg-transparent p-3" /> </div>
                </div>
                <div className=" w-11/12 mx-auto lg:w-10/12 py-10">
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src={gimg8} alt="" className="size-[10rem]" />
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
        </UserBoard>
    )
}

export default BuyCrypto