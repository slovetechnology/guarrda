import React, { useState } from 'react'
import { SiteName, AdminHeaderNavs } from '../../utils/utils'
import { Link, useLocation } from 'react-router-dom'
import logo from "assets/glogo.svg"
import { AiFillQuestionCircle } from "react-icons/ai";
import { FaClockRotateLeft, FaMoon } from "react-icons/fa6";
import { LuSun } from "react-icons/lu"
import { FaHome, FaUnlock } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { dispatchTheme } from '../../store/reducer';
import { SlMenu } from "react-icons/sl"
import { PiX } from "react-icons/pi"
import UserFooter from '../user/UserFooter';
import AdminLogin from '../../forms/AdminLogin';


function AdminLayout({ children }) {
    const { pathname } = useLocation()
    const [login, setlogin] = useState(false)
    const dispatch = useDispatch()
    const { theme } = useSelector(state => state.data)
    const [view, setView] = useState(false)
    const Viewicon = view ? PiX : SlMenu

    function ToggleMode(theme) {
        dispatch(dispatchTheme(theme))
    }

    function HandleLoginAuthAction() {
        setlogin(false)
        closeview()
    }
    function HandleLoginAction() {
        setlogin(true)
        closeview()
    }

    function closeview() {
        setView(false)
    }
    if (!login) return (
        <div>
            <div className="bg-white dark:bg-subdark sticky top-0 left-0 w-full z-20">
                <div className="flex flex-row items-center justify-between lg:justify-center p-2 lg:p-0 gap-3 w-11/12 mx-auto lg:w-10/12">
                    <Link onClick={closeview} to="/"><img src={logo} alt="" className="size-9" /></Link>
                    <div className="lg:hidden"> <Viewicon onClick={() => setView(!view)} className="text-2xl cursor-pointer dark:text-white" /> </div>
                    <div className="hidden lg:flex items-center">
                        {AdminHeaderNavs.map((item, index) => (
                            <Link onClick={closeview} key={index} to={`${item.link}`} className={`uppercase truncate py-4 px-5 text-base text-slate-600 dark:text-white border-b-[3px] ${item.link === pathname ? 'border-primary' : 'border-transparent hover:border-bg dark:hover:border-primary/30'} transition-all`}>{item.title}</Link>
                        ))}
                        <Link onClick={closeview} className='text-slate-300 dark:text-zinc-500/80 text-2xl py-4 hover:text-primary px-3' to=""> <AiFillQuestionCircle /> </Link>
                        {theme === 'dark' && <div className='text-slate-300 dark:text-zinc-400/80 text-[1.4rem] hover:text-primary py-4 px-2 cursor-pointer' onClick={() => ToggleMode('light')}> <LuSun /> </div>}
                        {theme === 'light' && <div className='text-slate-300 dark:text-zinc-400/80 text-[1.4rem] hover:text-primary py-4 px-2 cursor-pointer' onClick={() => ToggleMode('dark')}> <FaMoon /> </div>}
                        <Link onClick={closeview} to="/" className='text-xl flex items-cener hover:bg-primary group gap-2 transition-all py-2 px-3 rounded-sm shadow-lg'>
                            <FaHome className='text-slate-300 group-hover:text-white text-2xl' />
                            <div className="text-slate-600 dark:text-slate-300 group-hover:text-white text-base">Back to {SiteName}</div>
                        </Link>
                    </div>
                </div>
                {view && <div className="flex lg:hidden flex-col pb-5 px-3">
                    {AdminHeaderNavs.map((item, index) => (
                        <Link onClick={closeview} key={index} to={`${item.link}`} className={`uppercase truncate py-4 px-5 text-base text-slate-600 dark:text-white border-b-[3px] ${item.link === pathname ? 'border-primary' : 'border-transparent hover:border-bg dark:hover:border-primary/30'} transition-all`}>{item.title}</Link>
                    ))}
                    <Link onClick={closeview} className='text-slate-300 dark:text-zinc-500/80 text-2xl py-4 hover:text-primary px-3' to=""> <AiFillQuestionCircle /> </Link>
                    {theme === 'dark' && <div className='text-slate-300 dark:text-zinc-400/80 text-[1.4rem] hover:text-primary py-4 px-2 cursor-pointer' onClick={() => ToggleMode('light')}> <LuSun /> </div>}
                    {theme === 'light' && <div className='text-slate-300 dark:text-zinc-400/80 text-[1.4rem] hover:text-primary py-4 px-2 cursor-pointer' onClick={() => ToggleMode('dark')}> <FaMoon /> </div>}
                    <Link onClick={closeview} to="/" className='text-xl flex items-cener hover:bg-primary group gap-2 transition-all py-2 px-3 rounded-sm shadow-lg'>
                        <FaHome className='text-slate-300 group-hover:text-white text-2xl' />
                        <div className="text-slate-600 dark:text-slate-300 group-hover:text-white text-base">Back to {SiteName}</div>
                    </Link>
                </div>}
            </div>
            <AdminLogin HandleLoginAction={HandleLoginAction} />
            <UserFooter />
        </div>
    )
    if (login) return (
        <div>
            <div className="bg-white dark:bg-subdark sticky top-0 left-0 w-full z-20">
                <div className="flex flex-row items-center justify-between lg:justify-center gap-3 w-11/12 p-3 lg:p-0 mx-auto lg:w-10/12">
                    <Link onClick={closeview} to="/portal/admin"><img src={logo} alt="" className="size-9" /></Link>
                    <div className="lg:hidden"> <Viewicon onClick={() => setView(!view)} className="text-2xl cursor-pointer dark:text-white" /> </div>
                    <div className="hidden lg:flex">
                        {AdminHeaderNavs.map((item, index) => (
                            <Link onClick={closeview} key={index} to={`${item.link}`} className={`uppercase truncate py-4 px-7 text-base text-slate-600 dark:text-white border-b-[3px] ${item.link === pathname ? 'border-primary' : 'border-transparent hover:border-bg dark:hover:border-primary/30'} transition-all`}>{item.title}</Link>
                        ))}
                        <div className="flex items-center ml-10 gap-4">
                            <Link onClick={closeview} className='text-slate-300 dark:text-zinc-400/80 text-[1.4rem] hover:text-primary py-4 px-2' to="/portal/admin/transactions"> <FaClockRotateLeft /> </Link>
                            <Link onClick={closeview} className='text-slate-300 dark:text-zinc-400/80 text-[1.4rem] hover:text-primary py-4 px-2' to=""> <AiFillQuestionCircle /> </Link>
                            {theme === 'dark' && <div className='text-slate-300 dark:text-zinc-400/80 text-[1.4rem] hover:text-primary py-4 px-2 cursor-pointer' onClick={() => ToggleMode('light')}> <LuSun /> </div>}
                            {theme === 'light' && <div className='text-slate-300 dark:text-zinc-400/80 text-[1.4rem] hover:text-primary py-4 px-2 cursor-pointer' onClick={() => ToggleMode('dark')}> <FaMoon /> </div>}
                            <div onClick={HandleLoginAuthAction} className='text-slate-300 cursor-pointer dark:text-zinc-400/80 text-[1.4rem] hover:text-primary py-4 px-2' to=""> <FaUnlock /> </div>
                        </div>
                    </div>
                </div>
                {view && <div className="flex lg:hidden flex-col pb-5 px-3">
                    {AdminHeaderNavs.map((item, index) => (
                        <Link onClick={closeview} key={index} to={`${item.link}`} className={`uppercase truncate py-4 px-5 text-base text-slate-600 dark:text-white border-b-[3px] ${item.link === pathname ? 'border-primary' : 'border-transparent hover:border-bg dark:hover:border-primary/30'} transition-all`}>{item.title}</Link>
                    ))}
                    <div className="flex items-center ml-10 gap-2">
                        <Link onClick={closeview} className='text-slate-300 dark:text-zinc-400/80 text-[1.4rem] hover:text-primary py-4 px-2' to="/portal/admin/transactions"> <FaClockRotateLeft /> </Link>
                        <Link onClick={closeview} className='text-slate-300 dark:text-zinc-400/80 text-[1.4rem] hover:text-primary py-4 px-2' to=""> <AiFillQuestionCircle /> </Link>
                        {theme === 'dark' && <div className='text-slate-300 dark:text-zinc-400/80 text-[1.4rem] hover:text-primary py-4 px-2 cursor-pointer' onClick={() => ToggleMode('light')}> <LuSun /> </div>}
                        {theme === 'light' && <div className='text-slate-300 dark:text-zinc-400/80 text-[1.4rem] hover:text-primary py-4 px-2 cursor-pointer' onClick={() => ToggleMode('dark')}> <FaMoon /> </div>}
                        <div onClick={HandleLoginAuthAction} className='text-slate-300 cursor-pointer dark:text-zinc-400/80 text-[1.4rem] hover:text-primary py-4 px-2' to=""> <FaUnlock /> </div>
                    </div>
                </div>}
            </div>
            {children}
            <UserFooter />
        </div>
    )
}

export default AdminLayout