import React from 'react'
import Forminput from '../components/Forminput'
import img from "assets/gimg4.svg"
import Formbutton from '../components/Formbutton'
import { SlArrowLeft } from 'react-icons/sl'
import { Link } from 'react-router-dom'


function Signup() {
    function HandleLoginAction() {
        //
    }
    return (
        <div className="w-11/12 mx-auto max-w-xl bg-white dark:bg-subdark mt-7">
            <div className=" px-9 py-4">
                <div className="font-semibold text-2xl text-slate-600 dark:text-primary pt-7">Welcome back!</div>
                <div className="text-sm text-slate-700 dark:text-slate-300 pb-5">Unlock your Guarda Wallet with your password</div>
                <Forminput placeholder="Password" />
                <div className="relative">
                    <div className="flex items-center gap-2 absolute top-3 right-2 z-10">
                        <img src={img} alt="" className="size-4" />
                        <div className="text-xs text-primary">Secure encryption</div>
                    </div>
                    <Forminput placeholder="Confirm Password" />
                </div>
                <div className="grid grid-cols-4 gap-5 mb-7 pt-6">
                    <Link to='/app' className="text-primary items-center flex gap-2 w-fit group"> <SlArrowLeft /> <span className="group-hover:underline">Back</span> </Link>
                    <div></div>
                    <div className="col-span-2">
                        <Formbutton title="I've written it down" onClick={HandleLoginAction} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup