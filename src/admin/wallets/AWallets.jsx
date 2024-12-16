import React, { useCallback, useEffect, useState } from 'react'
import Formbutton from '../../components/Formbutton'
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import Forminput from '../../components/Forminput';
import { MenuItem } from '@mui/material';
import { toast } from 'sonner';
import { useForm } from "react-hook-form"
import { CoinFlags, CountriesTags, returnError } from '../../utils/utils';
import CustomSelect from '../../components/admin/CustomSelect';
import { Apis, AuthDelete, Authgeturl, Authposturl } from '../../utils/Apis';
import moment from 'moment';
import { FaArrowLeft } from 'react-icons/fa6';
import { PiX } from 'react-icons/pi';
import Multiselection from '../../components/Multiselection';

const Tables = [
    "",
    "name",
    "short",
    "active",
    "Currencies attached",
    "date created",
    "",
]

const Status = [
    "true",
    "false",
]

function AWallets() {
    const [opened, { open, close }] = useDisclosure(false);
    const [opened2, openedtag] = useDisclosure(false);
    const [crypto, setCrypto] = useState('')
    const [currency, setCurrency] = useState('')
    const [error, setError] = useState({ tag: '', content: '' })
    const [data, setData] = useState({})
    const [single, setSingle] = useState({})
    const [currencies, setCurrencies] = useState([])
    const [rates, setRates] = useState([])
    const [finalData, setFinalData] = useState({
        active: '',
        name: '',
        currency: '',
        rates: '',
    })
    const { handleSubmit, register, formState: { errors, isSubmitting }, watch, setValue } = useForm({
        defaultValues: {
            active: '',
            name: '',
        },
    })
    const watchform = watch(['active'])
    const [screen, setScreen] = useState(1)
    const rateform = useForm({
        defaultValues: {
            rate: '',
            active: '',
            fee: '',
        }
    })
    const ratewatchform = rateform?.watch(['active'])

    function LoadContent(item) {
        setCrypto(item)
        setError({ tag: '', content: '' })
    }

    const Fetchdata = useCallback(async () => {
        try {
            const response = await Authgeturl(Apis.admin.all_wallet)
            const response2 = await Authgeturl(Apis.admin.all_currency)
            setCurrencies(response2.data)
            return setData(response)
        } catch (error) {
            returnError(error)
        }
    }, [])

    useEffect(() => { Fetchdata() }, [Fetchdata])

    function HandleOpen(item) {
        openedtag.open()
        setCrypto(item.short)
        setValue('active', item.active)
        setValue('name', item.name)
        setSingle(item)
        setRates(item.rates)
    }
    function HandleCreate(item) {
        open()
        setCrypto("")
        setValue('active', '')
        setValue('name', '')
        setSingle({})
        setRates([])
    }

    function SubmitAction(values) {
        if (!crypto) return setError({ tag: 'wallet', content: 'Please select a wallet' })
        setError({ tag: '', content: '' })
        setFinalData({
            ...finalData,
            name: values.name,
            active: values.active,
            crypto: crypto,
        })
        return setScreen(2)
    }

    async function SubmitDataForm() {
        const formData = {
            ...finalData,
            short: finalData.crypto,
            tag: single?.id ? 'update' : 'create',
            id: single?.id ?? ''
        }
        try {
            const response = await Authposturl(Apis.admin.manage_wallet, formData)
            if (![201, 200].includes(response.status)) return toast.error(response.message)
            toast.success(response.message)
            if (single?.id) {
                openedtag.close()
            } else {
                close()
            }
            setScreen(1)
            return Fetchdata()
        } catch (error) {
            returnError(error)
        }
    }

    function LoadContent2(values) {
        setCurrency(values)
        setError({ tag: '', content: '' })
    }

    function AddRatingData(values) {
        if (!currency) return setError({ tag: 'currency', content: 'Currency is required' })
        const findItem = rates.find(ele => ele.currency === currency)
        if (findItem) return toast.error('Rate with the same Currency already added')
        const saveData = {
            ...values,
            currency
        }
        setRates([saveData, ...rates])
        rateform.setValue('active', "")
        rateform.setValue('rate', "")
        rateform.setValue('fee', "")
        setCurrency("")
    }

    async function RemoveRate(item) {
        if(!single?.id) {
            const itemData = rates.filter(ele => ele.currency !== item)
            return setRates(itemData)
        }else {
            const itemData = rates.find(ele => ele.currency === item)
            try {
                const itemData2 = rates.filter(ele => ele.currency !== item)
                 setRates(itemData2)
                const response = await AuthDelete(`${Apis.admin.remove_wallet_rate}/${itemData.walletid}/${itemData.currency}`)
                toast.success(response.message)
            } catch (error) {
                returnError(error)
            }
        }
    }

    function ToFinalCheckout() {
        setFinalData({
            ...finalData,
            rates
        })
        return setScreen(3)
    }

    function RateCompo() {
        return (
            <form onSubmit={rateform.handleSubmit(AddRatingData)}>
                <div className='border-b pb-2 mb-2 flex items-center gap-5'>
                    <div className="text-sm font-semibold cursor-pointer flex items-center gap-3 w-fit" onClick={() => setScreen(prev => prev - 1)}> <FaArrowLeft /> Rates</div>
                    <button onClick={ToFinalCheckout} className="bg-primary py-1 px-3 rounded-md text-sm text-white" type="button">Next</button>
                </div>
                <div className="grid grid-cols-2 gap-5 items-center mb-5">
                    <Forminput
                        content="Base Rate"
                        {...rateform?.register('rate', { required: 'Base rate is required' })}
                        error={rateform?.formState?.errors?.rate}
                        errorMessage={rateform?.formState?.errors?.rate?.message} />
                    <Forminput
                        content="Network Fee"
                        {...rateform?.register('fee', { required: 'Network fee is required' })}
                        error={rateform?.formState?.errors?.fee}
                        errorMessage={rateform?.formState?.errors?.fee?.message} />
                    <Forminput
                        {...rateform?.register('active', { required: 'Active status is required' })}
                        error={rateform?.formState?.errors?.active}
                        value={ratewatchform[0] || ''}
                        errorMessage={rateform?.formState?.errors?.active?.message}
                        content="Rate Active Status" formtype="select">
                        {Status.map((item, index) => (
                            <MenuItem key={index} value={item}>{item}</MenuItem>
                        ))}
                    </Forminput>
                    <Multiselection contentValue="Select Currency" source={CountriesTags} Options={currencies} defaultValue={currency} error={error.tag === 'currency' ? error.content : ''} LoadContent={LoadContent2} />
                    <div className='mt-5'>
                        <Formbutton title='add' />
                    </div>
                </div>
                <div className="border-b pb-2 mb-2 text-sm font-semibold">Summary</div>
                <div className="">
                    {rates.map((item, index) => {
                        const getImage = CountriesTags.find(ele => ele.short === item.currency)?.image ?? nul
                        return (
                            <div className='border-b p-2 last:border-none text-sm flex items-center gap-5' key={index}>
                                <div className="flex w-full gap-2">
                                    <div className="">
                                        {getImage && <img src={getImage} alt="" className="size-7" />}
                                    </div>
                                    <div className="">
                                        <div className="uppercase font-bold">{item.currency}</div>
                                        <div className="">Rate: {item.rate}</div>
                                        <div className="">Fee: {item.fee}</div>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <div onClick={() => RemoveRate(item.currency)} className="cursor-pointer text-red-600 text-xl"> <PiX /> </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </form>
        )
    }

    function FormCompo() {
        return (
            <>
                <div className={`${screen === 1 ? '' : 'hidden'}`}>
                    <form onSubmit={handleSubmit(SubmitAction)}>
                        <Forminput content="Name" {...register('name', { required: 'wallet name is required' })} error={errors.name} errorMessage={errors.name?.message} />
                        <CustomSelect contentValue="Select wallet" Options={CoinFlags} error={error.tag === 'wallet' ? error.content : ''} defaultValue={crypto} LoadContent={LoadContent} />
                        <Forminput
                            {...register('active', { required: 'Active status is required' })}
                            error={errors.active}
                            value={watchform[0] || ''}
                            errorMessage={errors.active?.message}
                            content="Wallet Active Status" formtype="select">
                            {Status.map((item, index) => (
                                <MenuItem key={index} value={item}>{item}</MenuItem>
                            ))}
                        </Forminput>
                        <Formbutton title="Next" loading={isSubmitting} />
                    </form>
                </div>
                <div className={`${screen === 2 ? '' : 'hidden'}`}>
                    <RateCompo />
                </div>
                <div className={`${screen === 3 ? '' : 'hidden'}`}>
                    <div className="mb-3 border-b pb-2">
                        <div className="text-sm font-semibold cursor-pointer flex items-center gap-3 w-fit" onClick={() => setScreen(prev => prev - 1)}> <FaArrowLeft /> Summary</div>
                        <div className="w-fit mx-auto">
                            <img src={CoinFlags.find(ele => ele.short === finalData.crypto)?.image ?? null} alt="" className="size-16" />
                        </div>
                        <div className="text-center font-bold uppercase">{finalData.name}</div>
                        {finalData.rates.length > 0 && <>
                            <div className="border-b p-2">Rates</div>
                            <div className="">
                                {finalData.rates.map((item, index) => {
                                    const getImage = CountriesTags.find(ele => ele.short === item.currency)?.image ?? nul
                                    return (
                                        <div className='border-b p-2 last:border-none text-sm flex items-center gap-5' key={index}>
                                            <div className="flex w-full gap-2">
                                                <div className="">
                                                    {getImage && <img src={getImage} alt="" className="size-7" />}
                                                </div>
                                                <div className="">
                                                    <div className="uppercase font-bold">{item.currency}</div>
                                                    <div className="">Rate: {item.rate}</div>
                                                    <div className="">Fee: {item.fee}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </>}
                    </div>
                    <Formbutton title="Submit" onClick={SubmitDataForm} />
                </div >
            </>
        )
    }

    return (
        <>
            {/* create */}
            <Modal opened={opened} onClose={close} title="Create wallet" centered>
                <FormCompo />
            </Modal>
            {/* update */}
            <Modal opened={opened2} onClose={openedtag.close} title='Update' centered>
                <FormCompo />
            </Modal>
            <div className="mt-8 w-11/12 mx-auto max-w-[65rem]">
                <div className="w-fit ml-auto mb-5">
                    <Formbutton title='+ add wallet' onClick={HandleCreate} />
                </div>
                <div className="bg-white rounded-xl dark:bg-subdark border dark:border-subdark">
                    <div className="overflow-x-auto scrolls">
                        <table className="table w-full">
                            <thead>
                                <tr className='border-b'>
                                    {Tables.map((item, index) => (
                                        <th key={index} className="px-5 py-3 text-sm font-medium capitalize text-center text-zinc-500 dark:text-zinc-200 truncate">
                                            {item}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data.data?.map((item, index) => (
                                    <tr className='border-b last:border-none' key={index}>
                                        <td className="text-sm font-medium capitalize text-center"> <img src={CoinFlags.find(ele => ele.short === item.short)?.image} alt="" className="size-8" /> </td>
                                        <td className="px-5 py-3 text-sm font-medium capitalize text-center">{item.name}</td>
                                        <td className="px-5 py-3 text-sm font-medium capitalize text-center">{item.short}</td>
                                        <td className="px-5 py-3 text-sm font-medium capitalize text-center">{item.active}</td>
                                        <td className="px-5 py-3 text-sm font-medium capitalize text-center">{item.rates.length}</td>
                                        <td className="px-5 py-3 text-sm font-medium capitalize text-center">{moment(item.createdAt).format('DD-MM-YYYY hh:mm A')}</td>
                                        <td className="px-5 py-3 text-sm font-medium capitalize text-center"> <button onClick={() => HandleOpen(item)} className="py-2 px-3 rounded-lg border capitalize hover:bg-slate-700 transition-all hover:text-white">manage</button> </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {data.count > 0 && <div className="text-center text-sm text-zinc-500 py-10">No records found...</div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AWallets