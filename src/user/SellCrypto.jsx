import React, { useEffect, useState } from 'react'
import UserBoard from '../components/user/UserBoard'
import Forminput from '../components/Forminput'
import { SlArrowDown, SlStar } from 'react-icons/sl'
import Formbutton from '../components/Formbutton'
import gimg9 from "assets/gimg9.svg"
import gimg13 from "assets/gimg13.svg"
import gimg45 from "assets/gimg45.svg"
import { LuCopy } from "react-icons/lu"
import { FaCheck } from 'react-icons/fa6'
import ModalSelector from '../components/user/ModalSelector'
import { useDispatch, useSelector } from 'react-redux'
import { CoinFlags, ConvertCoinToCurrency, FormatDecimal } from '../utils/utils'
import { dispatchActiveWallet } from '../store/reducer'
import { Menu } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner'


function SellCrypto() {
    const [screen, setScreen] = useState(1)
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [views, setViews] = useState(false)
    const viewsContent = views ? 'To Address' : 'To My Wallet'
    const dispatch = useDispatch()
    const [singleMoney, setSingleMoney] = useState({})
    const [formdata, setFormData] = useState({})
    const { activewallet, wallets, profile, monies, theme, money } = useSelector(state => state.data)
    const coin = CoinFlags.find(ele => ele.short === activewallet?.wallet)
    const walls = wallets.find(ele => ele.short === activewallet?.wallet)
    const [opened, setOpened] = useState(false)
    const { register, formState: { errors }, watch, setValue, handleSubmit } = useForm({
        defaultValues: {
            coinSent: "",
            evaluation: "",
            fromWallet: "",
            toAddress: "",
            fromAddress: "",
            networkFee: "",
            toreceive: "",
            balance: 0,
            currency: money?.short?.toUpperCase() ?? "USD",
            amount: ""
        }
    })
    const watchform = watch(["currency", "networkFee", "amount"])

    useEffect(() => {
        (() => {
            if (!activewallet?.id && profile?.id) {
                dispatch(dispatchActiveWallet(profile?.wallets[0]))
                setValue("fromWallet", profile?.wallets[0]?.wallet)
                setValue("fromAddress", profile?.wallets[0]?.address)
                setValue("balance", profile?.wallets[0]?.balance)
                const findItem = monies.find(ele => ele.short === money?.short)
                setSingleMoney(findItem)
            } else {
                dispatch(dispatchActiveWallet(activewallet))
                setValue("fromWallet", activewallet?.wallet)
                setValue("fromAddress", activewallet?.address)
                setValue("balance", activewallet?.balance)
                const findItem = monies.find(ele => ele.short === money?.short)
                setSingleMoney(findItem)
            }
        })()
    }, [])

    function NextScreen(values) {
        const rate = walls.rates.find(ele => ele.currency.toUpperCase() === values.currency)
        if (rate) {
            const converts = values.coinSent / rate.rate
            const toreceive = parseFloat(FormatDecimal(converts))

            const convertfee = values.networkFee / rate.fee
            const fees = parseFloat(FormatDecimal(convertfee))

            const getTotalCharge = parseFloat(FormatDecimal(values.coinSent + values.networkFee))
            const totalCharge1 = getTotalCharge / rate.rate
            const totalCharge = parseFloat(totalCharge1.toFixed(2))

            if (getTotalCharge > values.balance) return toast.error("Insufficient balance on your wallet")

            setValue("toreceive", toreceive)
            setValue("evaluation", totalCharge)
            const senddata = {
                ...values,
                toreceive,
                evaluation: totalCharge,
                walletName: walls.name,
                evaluateFee: fees
            }
            setFormData(senddata)
            setScreen(prev => prev + 1)
        }

    }

    function SendFormAction() {
        setScreen(prev => prev + 1)
    }

    async function fromCopied() {
        const data = await navigator.clipboard.readText()
        setValue("toAddress", data)
    }

    function HandleMoneySelection(item) {
        setOpened(false)
        setSingleMoney(item)
        setValue("currency", item.short?.toUpperCase())
        if (watchform[2]) {
            const rate = walls.rates.find(ele => ele.currency === item.short?.toLowerCase())
            if (rate) {
                const totalfee = watchform[2] * rate.fee
                const sumfee = parseFloat(FormatDecimal(totalfee))
                setValue("networkFee", sumfee)
            }
        }
    }

    function DataSelected1(item) {
        const findwalls = profile?.wallets?.find(ele => ele.wallet === item.short)
        dispatch(dispatchActiveWallet(activewallet))
        setValue("fromWallet", findwalls?.wallet)
        setValue("fromAddress", findwalls?.address)
        setValue("balance", findwalls?.balance)
    }
    function DataSelected(item) {
        if (item.short === activewallet.wallet) return toast.error('Yoou cannot send to the same wallet / address, select a different wallet / address')
        const singles = profile?.wallets?.find(ele => ele.wallet === item.short)
        if (singles?.address) {
            setValue("toAddress", singles?.address)
        }
    }

    function HandleAmount(e) {
        const value = e.target.value
        if (value.length > 0) {
            setValue("amount", value)
            const rate = walls.rates.find(ele => ele.currency === watchform[0]?.toLowerCase())
            if (rate) {
                const total = value * rate.rate
                const totalfee = value * rate.fee
                const sum = parseFloat(FormatDecimal(total))
                const sumfee = parseFloat(FormatDecimal(totalfee))
                setValue("coinSent", sum)
                setValue("networkFee", sumfee)
            }
        }
    }
    if (screen === 1) return (
        <UserBoard>
            <div className="bg-white dark:bg-subdark border-x border-b dark:border-maindark rounded-b-lg">
                <div className="w-11/12 gap-5 mx-auto grid grid-cols-1 lg:grid-cols-7 pt-10 pb-32">
                    <div className="lg:col-span-4">
                        <form onSubmit={handleSubmit(NextScreen)}>
                            <div className="relative mb-4">
                                <div className="text-primary text-sm font-semibold">From</div>
                                <ModalSelector
                                    Options={wallets}
                                    source={CoinFlags}
                                    closeview={() => setOpen(false)}
                                    open={open}
                                    balance={true}
                                    defaultValue={activewallet}
                                    setOpen={setOpen}
                                    DataSelected={DataSelected1} />
                            </div>
                            <div className="">
                                <div className="flex items-center justify-between">
                                    <div className="text-primary text-sm font-semibold">To</div>
                                    <div className="text-primary text-sm font-semibold capitalize text-right hover:underline cursor-pointer"
                                        onClick={() => setViews(!views)}>{viewsContent}</div>
                                </div>
                                <div className={`relative ${views ? '' : '-mt-3'} mb-3`}>
                                    {views ?
                                        <ModalSelector
                                            Options={wallets}
                                            source={CoinFlags}
                                            closeview={() => setOpen2(false)}
                                            open={open2}
                                            balance={false}
                                            tops="top-[3rem]"
                                            setOpen={setOpen2}
                                            DataSelected={DataSelected} /> : <>
                                            <Forminput
                                                {...register("toAddress", { required: "Enter a designated address" })}
                                                error={errors?.toAddress}
                                                errorMessage={errors?.toAddress?.message}
                                                placeholder={`Enter ${activewallet?.wallet?.toUpperCase()} or HRA`} />
                                            <div
                                                onClick={fromCopied}
                                                className="absolute bg-white dark:bg-subdark py-1 top-2.5 right-2 cursor-pointer">
                                                <div className="text-primary flex items-center gap-2 text-sm font-medium"> Paste <img src={gimg45} alt="" className="size-5" /> </div>
                                            </div>
                                        </>}
                                </div>
                            </div>
                            <div className="">
                                <div>
                                    <Menu shadow="md" classNames='relative p-0 mt-20' width={"250px"} opened={opened} onChange={setOpened}>
                                        <Menu.Target>
                                            <div className="text-primary text-sm font-bold group cursor-pointer w-fit flex items-center gap-2"> Amount<span className="group-hover:underline"> {watchform[0]}</span> <SlArrowDown /> </div>
                                        </Menu.Target>

                                        <Menu.Dropdown style={{ backgroundColor: theme ? '#222223' : 'white', color: theme ? 'lightgray' : "black", border: theme ? '#222223' : '', marginLeft: '5rem' }} className='p-0 h-fit max-h-[18rem] dark:bg-maindark'>
                                            {monies.map((item, index) => (
                                                <div
                                                    onClick={() => HandleMoneySelection(item)}
                                                    className={`p-2 font-bold flex items-center gap-2 ${theme ? 'hover:bg-thickdark' : 'hover:bg-slate-100'} cursor-pointer`} key={index}>
                                                    <div className="uppercase">{item?.short}</div> -
                                                    <div className="capitalize">{item?.name}</div>
                                                </div>
                                            ))}
                                        </Menu.Dropdown>
                                    </Menu>
                                </div>
                                <Forminput
                                    {...register("amount", { required: 'Amount to send is required' })}
                                    error={errors.amount}
                                    errorMessage={errors.amount?.message}
                                    onChange={HandleAmount}
                                    type="tel"
                                    placeholder="0"
                                />
                            </div>
                            <div className="flex items-center gap-2 p-2 text-sm">
                                <div className="text-zinc-500">Available</div>
                                <div className="text-primary">{ConvertCoinToCurrency({ walls, money: singleMoney, item: activewallet })} {watchform[0]}</div>
                            </div>
                            <div className="flex items-center gap-2 p-2 text-sm">
                                <div className="text-zinc-500">Network fee</div>
                                <div className="text-primary">{watchform[1] ?? '---'}</div>
                            </div>
                            <div className="border-t dark:border-slate-600 px-3 pt-5">
                                <div className="grid grid-cols-2">
                                    <div className="text-sm text-zinc-500 dark:text-zinc-300">Step {screen} of 3</div>
                                    <div className=""> <Formbutton title="Next" /> </div>
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
                <div className="w-11/12 gap-5 mx-auto grid grid-cols-1 lg:grid-cols-7 pt-10 pb-32">
                    <div className="lg:col-span-4">
                        <div className="text-center text-xl dark:text-zinc-300">Are you sure you want to</div>
                        <div className="text-center text-2xl dark:text-primary text-primary border-b pb-5 font-bold mt-2">Send {formdata?.coinSent}{formdata?.fromWallet?.toUpperCase()}</div>
                        <div className="grid grid-cols-2 gap-2 py-3">
                            <div className="">
                                <div className="">You will send</div>
                                <div className="">Evaluation</div>
                            </div>
                            <div className="">
                                <div className="text-right break-words font-medium">{formdata?.coinSent}{formdata?.fromWallet?.toUpperCase()}</div>
                                <div className="text-right break-words font-medium">{formdata?.evaluation?.toFixed(2)}{formdata?.currency}</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-3">
                            <div className="">
                                <div className="">From wallet</div>
                                <div className="">address</div>
                            </div>
                            <div className="">
                                <div className="text-right break-words font-medium capitalize">{formdata?.walletName}</div>
                                <div className="text-right break-words font-medium">{formdata?.fromAddress}</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-3">
                            <div className="">
                                <div className="">To address</div>
                            </div>
                            <div className="">
                                <div className="text-right break-words font-medium">{formdata?.toAddress}</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-3">
                            <div className="">
                                <div className="">Network fee</div>
                                <div className="">Evaluation</div>
                            </div>
                            <div className="">
                                <div className="text-right break-words font-medium">{formdata?.networkFee}{formdata?.currency}</div>
                                <div className="text-right break-words font-medium">{formdata?.evaluateFee} {formdata?.currency}</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-3">
                            <div className="">
                                <div className="">will receive</div>
                            </div>
                            <div className="">
                                <div className="text-right break-words font-medium">{formdata?.coinSent}{formdata?.fromWallet?.toUpperCase()}</div>
                            </div>
                        </div>
                        <div className="border-t dark:border-slate-600 px-3 pt-5">
                            <div className="grid grid-cols-2">
                                <div className="text-sm text-zinc-500 dark:text-zinc-300">Step {screen} of 3</div>
                                <div className=""> <Formbutton title="Confirm" onClick={SendFormAction} /> </div>
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