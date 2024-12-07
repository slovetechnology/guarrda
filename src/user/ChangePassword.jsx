

import React from 'react'
import UserSettingsLayout from '../components/user/UserSettingsLayout'
import gimg38 from "assets/gimg38.svg"
import Forminput from '../components/Forminput'
import Formbutton from '../components/Formbutton'

function ChangePassword() {
  return (
    <UserSettingsLayout>
      <div className="bg-white dark:bg-subdark dark:border-maindark dark:text-zinc-300 rounded-lg pt-10 border pb-[16.7rem]">
        <div className="w-11/12 lg:w-10/12 mx-auto">
          <div className="text-center font-bold text-xl">Change Password</div>
          <div className="text-center text-sm mt-6 mb-3">You will only change the password on this device. Don't forget to do the same
            <div>on your other devices with Guarda app.</div>
          </div>
          <div className="w-11/12 lg:max-w-sm mx-auto">
            <Forminput placeholder="Enter old password" />
            <Forminput placeholder="Enter new password" />
            <Forminput placeholder="Enter new password" />
            <div className="lg:w-2/5 mx-auto">
              <Formbutton title="Restore" />
            </div>
          </div>
        </div>
      </div>
    </UserSettingsLayout>
  )
}

export default ChangePassword

