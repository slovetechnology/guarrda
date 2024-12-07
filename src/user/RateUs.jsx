

import React from 'react'
import UserSettingsLayout from '../components/user/UserSettingsLayout'
import gimg40 from "assets/gimg40.svg"
import gimg39 from "assets/gimg39.svg"
import gimg41 from "assets/gimg41.svg"
import gimg42 from "assets/gimg42.svg"
import Formbutton from '../components/Formbutton'
import { FaRegStar, FaStar } from 'react-icons/fa6'
import { SlStar } from 'react-icons/sl'
import { useSelector } from 'react-redux'

function RateUs() {
  const {theme} = useSelector(state => state.data)
  return (
    <UserSettingsLayout>
      <div className="bg-white dark:bg-subdark dark:border-maindark dark:text-zinc-300 rounded-lg pt-10 border pb-[7.7rem]">
        <div className="w-11/12 lg:w-10/12 mx-auto">
          <div className="text-center font-bold text-xl dark:text-zinc-300">Rate Us</div>
          <div className="text-center text-sm mt-6 mb-3 dark:text-zinc-300">You can make Guarda Wallet better.
            <div>Please rate us on <span className="font-bold">Trustpilot.</span> </div>
          </div>
          <div className="w-11/12 lg:max-w-sm mx-auto">
            <div className="flex flex-col items-center text-center">
              <img src={theme === 'dark' ? gimg42 : gimg40} alt="" className="size-[10rem]" />
              <div className="flex flex-row items-center mt-5">
                {new Array(4).fill(0).map((_, index) => (
                  <img src={gimg39} alt="" className="size-4" />
                ))}
                <img src={gimg41} alt="" className="size-4" />
              </div>
              <div className="mb-10">Over <span className="font-bold">500</span> reviews</div>
              <div className="flex flex-row items-center gap-1 mt-8">
                {new Array(5).fill(0).map((_, index) => (
                  <SlStar key={index} className={`text-2xl text-zinc-400`} />
                ))}
              </div>
            </div>
            <div className="lg:w-2/5 mx-auto mt-10">
              <Formbutton title="Rate Us" />
            </div>
          </div>
        </div>
      </div>
    </UserSettingsLayout>
  )
}

export default RateUs

