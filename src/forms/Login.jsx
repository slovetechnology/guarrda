import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Formbutton from '../components/Formbutton'
import { TrackCode } from '../utils/utils'
import LoginFormComponent from './LoginFormComponent'


const DownLinks2 = [
    {title: 'what exactly is guarrda wallet', link: ''},
    {title: 'how to import another wallet here', link: ''},
]

function Login({HandleLoginAction}) {
    const locals = localStorage.getItem(TrackCode)
    const navigate = useNavigate()
    if(locals === 'null') return (
        <div>
            <div className="w-11/12 mx-auto max-w-xl bg-white dark:bg-subdark mt-7">
                <div className=" px-9 py-4">
                    <div className="font-semibold text-center mb-10 text-2xl text-slate-600 dark:text-primary pt-7">Hello! Welcome to Guarda Wallet</div>
                    <div className="text-sm text-slate-700 dark:text-slate-300 pb-5">This wallet makes it easy to access your crypto and interact with blockchain. Guarda does not have access to your funds.</div>
                    <div className="text-sm text-slate-700 dark:text-slate-300 pb-5">Restore your existing Guarda Wallet, import private key from any other one to create a new Wallet right now!</div>
                    
                    <Formbutton title="Create a new wallet" onClick={() => navigate('/app/create')} />
                    <Formbutton title="Restore or import" onClick={() => navigate('/app/restore')} className={'bg-transparent !text-primary hover:!bg-transparent mt-5'} />
                </div>
                <div className="bg-bgdown dark:bg-[#111111] px-9 py-4">
                    {DownLinks2.map((item, index) => (
                        <Link key={index} to={`${item.link}`} className='hover:underline text-zinc-400 flex items-center gap-2 text-base pb-2'>
                            <div className="size-1 bg-zinc-400"></div>
                            <div className="">{item.title}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
    if(locals !== 'null') return (
        <div>
            <LoginFormComponent HandleLoginAction={HandleLoginAction} role='user' />
        </div>
    )
}

export default Login