import React from 'react'
import Formbutton from '../components/Formbutton'
import Forminput from '../components/Forminput'
import { Link, useNavigate } from 'react-router-dom'
import img from "assets/gimg4.svg"
import { returnError, SiteRoles, tokenName, TrackCode } from '../utils/utils'
import { useForm } from 'react-hook-form'
import { Apis, Posturl } from '../utils/Apis'
import { toast } from 'sonner'
import Cookies from "js-cookie"
import { decodeToken } from 'react-jwt'

const DownLinks = [
    { title: 'Forgot your password?', link: '', click: false },
    { title: 'want to create a new wallet?', link: '/app/create', click: true },
    { title: 'want to import any other wallet here?', link: '', click: false },
]

function LoginFormComponent({ HandleLoginAction, role }) {
    const ActionTabLinks = role === 'user' ? DownLinks : DownLinks?.slice(0, 1)
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    })
    const navigate = useNavigate()

    async function LoginUserAction(values) {
        try {
            const response = await Posturl(Apis.user.login, values)
            if (response.status !== 200) return toast.error(response.message)
            localStorage.setItem(TrackCode, values.email)
            toast.success(response.message)
            Cookies.set(tokenName, response.token)
            const toks = decodeToken(response.token)
            const findRole = SiteRoles.find(ele => ele.role === toks.role)
            navigate(findRole.link)
            return HandleLoginAction()
        } catch (error) {
            returnError(error)
        }
    }

    function ClickAction(item) {
        if (item) {
            localStorage.setItem(TrackCode, "null")
        }
    }
    return (
        <div className="w-11/12 mx-auto max-w-xl bg-white dark:bg-subdark mt-7">
            <form onSubmit={handleSubmit(LoginUserAction)} className=" px-9 py-4">
                <div className="font-semibold text-2xl text-slate-600 dark:text-primary pt-7">Welcome back!</div>
                <div className="text-sm text-slate-700 dark:text-slate-300 pb-5">Unlock your Guarda Wallet with your password</div>
                <Forminput
                    {...register("email", { required: 'Email is required' })}
                    error={errors.email}
                    errorMessage={errors.email?.message}
                    placeholder="Email" />
                <Forminput
                    {...register("password", { required: 'Password is required' })}
                    error={errors.password}
                    errorMessage={errors.password?.message}
                    type='password'
                    placeholder="Password" />
                <div className="grid grid-cols-3 gap-5 mb-7 pt-6">
                    <div className="flex items-center gap-2">
                        <img src={img} alt="" className="size-4" />
                        <div className="text-xs text-primary">Secure encryption</div>
                    </div>
                    <div></div>
                    <div className="">
                        <Formbutton title="Unlock" loading={isSubmitting} />
                    </div>
                </div>
            </form>
            <div className="bg-bgdown dark:bg-[#111111] px-9 py-4">
                {ActionTabLinks.map((item, index) => (
                    <Link key={index} onClick={() => ClickAction(item.click)} to={`${item.link}`} className='hover:underline text-zinc-400 flex items-center gap-2 text-base pb-2'>
                        <div className="size-1 bg-zinc-400"></div>
                        <div className="">{item.title}</div>
                    </Link>
                ))}
            </div>
        </div>)
}

export default LoginFormComponent