import React from 'react'
import { Link } from 'react-router-dom'
import Forminput from '../components/Forminput'
import img from "assets/gimg4.svg"
import Formbutton from '../components/Formbutton'

const DownLinks = [
    {title: 'Forgot your password?', link: ''},
    {title: 'want to create a new wallet?', link: ''},
    {title: 'want to import any other wallet here?', link: ''},
]

function Login({HandleLoginAction}) {
    return (
        <div>
            <div className="w-11/12 mx-auto max-w-xl bg-white dark:bg-subdark mt-7">
                <div className=" px-9 py-4">
                    <div className="font-semibold text-2xl text-slate-600 dark:text-primary pt-7">Welcome back!</div>
                    <div className="text-sm text-slate-700 dark:text-slate-300 pb-5">Unlock your Guarda Wallet with your password</div>
                    <Forminput placeholder="Email" />
                    <Forminput placeholder="Password" />
                    <div className="grid grid-cols-3 gap-5 mb-7 pt-6">
                        <div className="flex items-center gap-2">
                            <img src={img} alt="" className="size-4" />
                            <div className="text-xs text-primary">Secure encryption</div>
                        </div>
                        <div></div>
                        <div className="">
                            <Formbutton title="Unlock" onClick={HandleLoginAction} />
                        </div>
                    </div>
                </div>
                <div className="bg-bgdown dark:bg-[#111111] px-9 py-4">
                    {DownLinks.map((item, index) => (
                        <Link key={index} to={`${item.link}`} className='hover:underline text-zinc-400 flex items-center gap-2 text-base pb-2'>
                            <div className="size-1 bg-zinc-400"></div>
                            <div className="">{item.title}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Login