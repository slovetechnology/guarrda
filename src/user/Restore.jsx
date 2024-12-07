

import React from 'react'
import UserSettingsLayout from '../components/user/UserSettingsLayout'
import gimg38 from "assets/gimg38.svg"
import gimg36 from "assets/gimg36.svg"
import Forminput from '../components/Forminput'
import Formbutton from '../components/Formbutton'
import { useSelector } from 'react-redux'

function Restore() {
  const {theme} = useSelector(state => state.data)
  return (
    <UserSettingsLayout>
      <div className="bg-white dark:bg-subdark dark:border-maindark rounded-lg pt-10 border pb-[7rem]">
        <div className="w-11/12 lg:w-10/12 mx-auto">
          <div className="text-center font-bold text-xl dark:text-zinc-300">Guarda Wallet Backup</div>
          <div className="text-center text-sm mt-6 mb-3 dark:text-zinc-300">Upload Guarda backup file or text to restore your wallets.
            <div>They will be merged to your current backup.</div>
          </div>
          <div className="max-w-md mx-auto ">
          <div className="w-fit ml-auto mb-2 text-sm"> <button className="border border-primary text-primary py-2 px-4 rounded-md">Enter backup text</button> </div>
            <div className="border border-dashed border-zinc-400 rounded-lg h-[15rem]">
              <div className="flex flex-col items-center w-full h-full gap-3 justify-center">
                <div className=""> <img src={theme === 'dark' ? gimg36 : gimg38} alt="" className="size-28" /> </div>
                <div className="text-sm text-zinc-500">Drag and drop file or</div>
                <div className=""> <button className="bg-green-500 py-1 text-sm px-5 rounded-md text-white">Browse</button> </div>
              </div>
            </div>
            <Forminput placeholder="Enter password" />
            <div className="w-2/5 mx-auto">
              <Formbutton title="Restore" />
            </div>
          </div>
        </div>
      </div>
    </UserSettingsLayout>
  )
}

export default Restore