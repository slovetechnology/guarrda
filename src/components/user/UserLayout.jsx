import React, { useCallback, useEffect, useState } from 'react'
import { returnError, SiteName, tokenName, TrackCode, UserHeaderNavs, UserHeaderNavsLocal } from '../../utils/utils'
import { Link, useLocation } from 'react-router-dom'
import logo from "assets/glogo.svg"
import { AiFillQuestionCircle } from "react-icons/ai";
import { FaClockRotateLeft, FaMoon } from "react-icons/fa6";
import { LuSun } from "react-icons/lu"
import { FaHome, FaUnlock } from "react-icons/fa";
import UserFooter from './UserFooter';
import Login from '../../forms/Login';
import { useDispatch, useSelector } from 'react-redux';
import { dispatchLogin, dispatchMoney, dispatchMonies, dispatchProfile, dispatchTheme, dispatchWallets } from '../../store/reducer';
import { SlMenu } from "react-icons/sl"
import { PiX } from "react-icons/pi"
import { Apis, Authgeturl } from '../../utils/Apis';
import Cookies from 'js-cookie'
import { isExpired } from "react-jwt"


const ExcludedRoutes = [
    "/app/create",
    "/app/restore",
]


function UserLayout({ children }) {
    const { pathname } = useLocation()
    const dispatch = useDispatch()
    const { theme, isLogin } = useSelector(state => state.data)
    const [view, setView] = useState(false)
    const Viewicon = view ? PiX : SlMenu
    const LocalTrack = localStorage.getItem(TrackCode)
    const AllNavs = LocalTrack === 'null' ? UserHeaderNavsLocal : UserHeaderNavs


    useEffect(() => {
        if (!LocalTrack) {
            localStorage.setItem(TrackCode, "null")
        }
    }, [])

    const FetchProfile = useCallback(async () => {
        try {
            const token = Cookies.get(tokenName)
            if (!token) return dispatch(dispatchLogin(2))
            const exp = isExpired(token)
            if (exp) return dispatch(dispatchLogin(2))
            const response = await Authgeturl(Apis.user.profile)
            if (response.status === 200) {
                dispatch(dispatchLogin(1))
                dispatch(dispatchProfile(response.data))
                dispatch(dispatchWallets(response.wallets))
                dispatch(dispatchMonies(response.currs))
                dispatch(dispatchMoney(response.currs[0]))
            } else {
                dispatch(dispatchLogin(2))
            }
        } catch (error) {
            returnError(error)
        }
    }, [])

    useEffect(() => {
        FetchProfile()
    }, [FetchProfile])

    function ToggleMode(theme) {
        dispatch(dispatchTheme(theme))
    }

    function HandleLoginAuthAction() {
        dispatch(dispatchProfile({}))
        Cookies.remove(tokenName)
        dispatch(dispatchLogin(2))
        closeview()
    }
    function HandleLoginAction() {
        FetchProfile()
        dispatch(dispatchLogin(1))
        closeview()
    }

    function closeview() {
        setView(false)
    }
    if (isLogin === 2) return (
        <div>
            <div className="bg-white dark:bg-subdark sticky top-0 left-0 w-full z-20">
                <div className="flex flex-row items-center justify-between lg:justify-center p-2 lg:p-0 gap-3 w-11/12 mx-auto lg:w-10/12">
                    <Link onClick={closeview} to="/"><img src={logo} alt="" className="size-9" /></Link>
                    <div className="lg:hidden"> <Viewicon onClick={() => setView(!view)} className="text-2xl cursor-pointer dark:text-white" /> </div>
                    <div className="hidden lg:flex items-center">
                        {AllNavs.map((item, index) => (
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
                {view && <div className="flex flex-col pb-5 px-3">
                    {AllNavs.map((item, index) => (
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
            {LocalTrack === 'null' && ExcludedRoutes.includes(pathname) ? children : <Login HandleLoginAction={HandleLoginAction} />}
            <UserFooter />
        </div>
    )
    if (isLogin === 1) return (
        <div>
            <div className="bg-white dark:bg-subdark sticky top-0 left-0 w-full z-20">
                <div className="flex flex-row items-center justify-between lg:justify-center gap-3 w-11/12 p-3 lg:p-0 mx-auto lg:w-10/12">
                    <Link onClick={closeview} to="/app" className='truncate'><img src={logo} alt="" className="size-8 md:size-32 lg:size-10" /></Link>
                    <div className="lg:hidden"> <Viewicon onClick={() => setView(!view)} className="text-2xl cursor-pointer dark:text-white" /> </div>
                    <div className="hidden lg:flex">
                        {UserHeaderNavs.map((item, index) => (
                            <Link onClick={closeview} key={index} to={`${item.link}`} className={`uppercase truncate py-4 px-7 text-base text-slate-600 dark:text-white border-b-[3px] ${item.link === pathname ? 'border-primary' : 'border-transparent hover:border-bg dark:hover:border-primary/30'} transition-all`}>{item.title}</Link>
                        ))}
                        <div className="flex items-center ml-10 gap-4">
                            <Link onClick={closeview} className='text-slate-300 dark:text-zinc-400/80 text-[1.4rem] hover:text-primary py-4 px-2' to="/app/history"> <FaClockRotateLeft /> </Link>
                            <Link onClick={closeview} className='text-slate-300 dark:text-zinc-400/80 text-[1.4rem] hover:text-primary py-4 px-2' to=""> <AiFillQuestionCircle /> </Link>
                            {theme === 'dark' && <div className='text-slate-300 dark:text-zinc-400/80 text-[1.4rem] hover:text-primary py-4 px-2 cursor-pointer' onClick={() => ToggleMode('light')}> <LuSun /> </div>}
                            {theme === 'light' && <div className='text-slate-300 dark:text-zinc-400/80 text-[1.4rem] hover:text-primary py-4 px-2 cursor-pointer' onClick={() => ToggleMode('dark')}> <FaMoon /> </div>}
                            <div onClick={HandleLoginAuthAction} className='text-slate-300 cursor-pointer dark:text-zinc-400/80 text-[1.4rem] hover:text-primary py-4 px-2' to=""> <FaUnlock /> </div>
                        </div>
                    </div>
                </div>
                {view && <div className="flex flex-col pb-5 px-3">
                    {UserHeaderNavs.map((item, index) => (
                        <Link onClick={closeview} key={index} to={`${item.link}`} className={`uppercase truncate py-4 px-5 text-base text-slate-600 dark:text-white border-b-[3px] ${item.link === pathname ? 'border-primary' : 'border-transparent hover:border-bg dark:hover:border-primary/30'} transition-all`}>{item.title}</Link>
                    ))}
                    <div className="flex items-center ml-10 gap-2">
                        <Link onClick={closeview} className='text-slate-300 dark:text-zinc-400/80 text-[1.4rem] hover:text-primary py-4 px-2' to="/app/history"> <FaClockRotateLeft /> </Link>
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

export default UserLayout