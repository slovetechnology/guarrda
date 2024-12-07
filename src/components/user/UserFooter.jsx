import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FooterLinkNavs } from '../../utils/utils'
import gimg1 from "assets/gimg1.png"
import gimg2 from "assets/gimg2.png"
import gimg3 from "assets/gimg3.svg"
import gimg10 from "assets/gimg10.svg"
import { FaHome } from 'react-icons/fa'
import { useSelector } from 'react-redux'



function UserFooter() {
    const {theme} = useSelector(state => state.data)
    const [cok, setCok] = useState(false)
    return (
        <div className='mt-10 pb-20'>
            <div className="w-11/12 mx-auto lg:w-10/12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-16 border-b dark:border-black">
                    <div className="flex flex-wrap items-center">
                        {FooterLinkNavs.map((item, index) => (
                            <Link key={index} to={`${item.link}`} className="py-2 px-3 flex items-center gap-2 text-sm text-slate-700 hover:text-primary transition-all dark:text-white">
                                {index === 0 && <FaHome />} {item.title}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-row items-center gap-2">
                            <img src={gimg1} alt="" className="h-8 w-auto" />
                            <img src={gimg2} alt="" className="h-8 w-auto" />
                        </div>
                       {theme !== 'dark' && <img src={gimg3} alt="" className="h-8 w-auto" />}
                       {theme === 'dark' && <img src={gimg10} alt="" className="h-8 w-auto" />}
                    </div>
                </div>
                <div className="text-zinc-500 dark:text-zinc-400 text-sm">
                    <div className="mt-5">
                        © 2017-2024 Guarda. All rights reserved
                    </div>

                    <div className="pt-5 pb-8">
                        GUARDACO LDA, provides virtual currency wallet service and services related to it, Legal entity ID - 516458965, whose registered office is Portugal, 1050-134 Lisboa, Rua Latino Coelho, str. 87.
                    </div>

                    <div className="py-5">
                        GUARDARIAN OÜ, a private limited company incorporated in Estonia with company number 14320990, whose registered office address is Rotermanni tn 2, Tallinn 10111, Estonia (“Guardarian”). Guardarian has obtained the license to provide virtual currency services which is issued by the respective Estonian authority. License’s number is FVT000200. Guardarian provides the virtual currency against virtual or fiat currency exchange service and card related products. Prepaid Card VISA is issued by Walletto UAB.
                    </div>
                </div>
               {cok && <div className="fixed bottom-0 left-0 w-full px-3 py-5 bg-blue-50">
                    <div className="w-11/12 mx-auto lg:w-10/12 text-slate-600">Our website uses cookies to improve your experience. By continuing you agree to our <Link to="/privacy-policy" className='text-primary'>Privacy Policy</Link> <button className="bg-primary text-white px-6 py-1.5 ml-3 rounded-lg">OK</button> </div>
                </div>}
            </div>
        </div>
    )
}

export default UserFooter