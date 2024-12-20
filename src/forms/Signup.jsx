import React, { useCallback, useEffect, useState } from 'react'
import Forminput from '../components/Forminput'
import img from "assets/gimg4.svg"
import Formbutton from '../components/Formbutton'
import { SlArrowLeft } from 'react-icons/sl'
import { Link, useNavigate } from 'react-router-dom'
import { returnError, tokenName, TrackCode } from '../utils/utils'
import Loadwallets from './Loadwallets'
import { Apis, Authgeturl, geturl, Posturl } from '../utils/Apis'
import { useForm } from "react-hook-form"
import { toast } from 'sonner'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { dispatchLogin, dispatchMoney, dispatchMonies, dispatchProfile, dispatchWallets } from '../store/reducer'


const DownLinks = [
    "Access to the wallet is possible only using both password and backup file.",
    "Guarda does not keep nor able to restore your backup and password. Only you have access to your wallet.",
    "Never share it with anyone.",
]

function Signup() {
    const [screen, setScreen] = useState(1)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [currencies, setCurrencies] = useState([])
    const { register, formState: { errors, isSubmitting }, handleSubmit, watch } = useForm({
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
        }
    })
    const watchform = watch(['password', "email"])

    const Fetchdata = useCallback(async () => {
        try {
            const response2 = await geturl(Apis.admin.all_wallet)
            return setCurrencies(response2.data)
        } catch (error) {
            returnError(error)
        }
    }, [])

    useEffect(() => { Fetchdata() }, [Fetchdata])

    async function HandleLoginAction(values) {
        try {
            const response = await Posturl(Apis.user.register, values)
            if (response.status !== 201) return toast.error(response.message)
            Cookies.set(tokenName, response.token)
            setScreen(2)
        } catch (error) {
            returnError(error)
        }
    }
    async function GoDashboard() {
        setLoading(true)
        try {
            localStorage.setItem(TrackCode, watchform[1])
            const response = await Authgeturl(Apis.user.profile)
            if (response.status === 200) {
                dispatch(dispatchLogin(1))
                dispatch(dispatchProfile(response.data))
                dispatch(dispatchWallets(response.wallets))
                dispatch(dispatchMonies(response.currs))
                dispatch(dispatchMoney(response.currs[0]))
                navigate('/app')
            } else {
                dispatch(dispatchLogin(2))
            }
        } catch (error) {
            returnError(error)
        }finally {
            setLoading(false)
        }
    }

    function NextSession() {
        setScreen(3)
    }

    if (screen === 1) return (
        <div className="w-11/12 mx-auto max-w-xl bg-white dark:bg-subdark mt-7">
            {screen === 1 && <form onSubmit={handleSubmit(HandleLoginAction)} className=" px-9 py-4">
                <div className="font-semibold text-2xl text-slate-600 dark:text-primary pt-7">Welcome back!</div>
                <div className="text-sm text-slate-700 dark:text-slate-300 pb-5">Unlock your Guarda Wallet with your password</div>
                <Forminput
                    {...register('email', { required: 'Email address is required' })}
                    error={errors.email}
                    errorMessage={errors.email?.message}
                    placeholder="Email address" />
                <Forminput
                    {...register('password', { required: 'password is required' })}
                    error={errors.password}
                    errorMessage={errors.password?.message}
                    type='password'
                    placeholder="Password" />
                <div className="relative">
                    <div className="flex items-center gap-2 absolute top-3 right-2 z-10">
                        <img src={img} alt="" className="size-4" />
                        <div className="text-xs text-primary">Secure encryption</div>
                    </div>
                    <Forminput
                        {...register('confirmPassword', {
                            required: 'Confirm password is required',
                            validate: value => {
                                if (value !== watchform[0]) return 'Password(s) do not match'
                            }
                        })}
                        type='password'
                        error={errors.confirmPassword}
                        errorMessage={errors.confirmPassword?.message}
                        placeholder="Confirm Password" />
                </div>
                <div className="grid grid-cols-4 gap-5 mb-7 pt-6">
                    <Link to='/app' className="text-primary items-center flex gap-2 w-fit group"> <SlArrowLeft /> <span className="group-hover:underline">Back</span> </Link>
                    <div></div>
                    <div className="col-span-2">
                        <Formbutton loading={isSubmitting} title="I've written it down" />
                    </div>
                </div>
            </form>}
        </div>
    )

    if (screen === 2) return (
        <div className="w-11/12 mx-auto max-w-xl mt-32 mb-[12rem] dark:text-zinc-200">
            <div className="px-9 py-4">
                <Loadwallets NextSession={NextSession} wallets={currencies} />
            </div>
        </div>
    )

    if (screen === 3) return (
        <div className="w-11/12 mx-auto max-w-xl bg-white dark:bg-subdark mt-7">
            <div className=" px-9 py-4">
                <div className="font-semibold text-2xl text-slate-600 dark:text-primary pt-7 mb-2">Backup is the key to your funds</div>
                <div className="text-sm text-slate-700 dark:text-slate-300 pb-5">Please save your backup file and keep it properly as well as password. It ensures access to your funds.</div>
                <div className="mb-4">
                    {DownLinks.map((item, index) => (
                        <div key={index} className='dark:text-zinc-200 text-zinc-400 flex mb-2.5 items-center gap-2 text-base pb-2'>
                            <div> <div className="size-1 bg-primary"></div> </div>
                            <div className="">{item}</div>
                        </div>
                    ))}
                </div>
                <Formbutton loading={loading} title="Download Backup" onClick={GoDashboard} />
            </div>
        </div>
    )
}

export default Signup