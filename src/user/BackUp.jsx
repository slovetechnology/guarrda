import React from 'react'
import UserSettingsLayout from '../components/user/UserSettingsLayout'
import gimg38 from "assets/gimg38.svg"
import gimg36 from "assets/gimg36.svg"
import { useSelector } from 'react-redux'

function BackUp() {
  const {theme} = useSelector(state => state.data)

  return (
    <UserSettingsLayout>
      <div className="bg-white dark:bg-subdark dark:border-maindark rounded-lg pt-10 border pb-[9.5rem]">
        <div className="w-11/12 lg:w-10/12 mx-auto">
          <div className="text-center font-bold text-xl dark:text-zinc-300">Guarda Wallet Backup</div>
          <div className="text-center text-sm mt-6 mb-10 dark:text-zinc-300">The backup contains all your private keys that give you access to your money.
            <div>⚠️⚠️⚠️ Guarda cannot restore your backup. Keep it safe and secure.</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <button className="border border-primary text-primary w-full md:w-[13rem] text-sm ml-auto text-center py-3 px-5 rounded-md">Copy backup text</button>
            <button className="bg-primary w-full md:w-[13rem] text-sm mr-auto text-white text-center py-3 px-5 rounded-md">Download backup file</button>
          </div>
          <div className="mt-16">
            <div className="border border-dashed border-zinc-400 max-w-md mx-auto rounded-lg h-[15rem]">
              <div className="flex items-center w-full h-full gap-3 justify-center">
                <div className=""> <img src={theme === 'dark' ?gimg36 : gimg38} alt="" className="size-28" /> </div>
                <div className="">
                <div>Last Update:</div>
                <div>Wallets: <span className="dark:text-zinc-300">11</span> </div>
                <div>Backup size: <span className="dark:text-zinc-200">9.09 KB</span> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserSettingsLayout>
  )
}

export default BackUp