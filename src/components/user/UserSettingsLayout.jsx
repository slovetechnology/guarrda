import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import gimg14 from "assets/gimg14.svg"
import gimg15 from "assets/gimg15.svg"
import gimg16 from "assets/gimg16.svg"
import gimg17 from "assets/gimg17.svg"
import gimg18 from "assets/gimg18.svg"
import gimg19 from "assets/gimg19.svg"
import { useSelector } from 'react-redux'
import ToggleTag from './ToggleTag'
import { SlMenu } from 'react-icons/sl'
import { PiX } from 'react-icons/pi'



function UserSettingsLayout({ children }) {
  const { theme } = useSelector(state => state.data)
  const { pathname } = useLocation()
  const [view, setView] = useState(false)
  const SetView = view ? PiX : SlMenu

  const Listings = [
    {
      title: 'backup',
      links: [
        { title: 'Download backup', link: '/app/settings/backup', img: theme !== 'dark' ? `backup1 ` : `backup2` },
        { title: 'Restore', link: '/app/settings/restore-backup', img: theme !== 'dark' ? `restore1 ` : `restore2` },
      ]
    },
    {
      title: 'security',
      links: [
        { title: 'Change password', link: '/app/settings/change-password', img: theme !== 'dark' ? `changep1 ` : `changep2` },
        { title: 'Ask password on transaction', link: false, img: theme !== 'dark' ? `askp1 ` : `askp2` },
        { title: 'Set session timeout to 15 minutes', link: false, img: theme !== 'dark' ? `session1 ` : `session2` },
      ]
    },
    {
      title: 'other',
      links: [
        { title: 'Rate us', link: '/app/settings/rate-us', img: theme !== 'dark' ? `rateus1 ` : `rateus2` },
      ]
    },
  ]
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-9 w-11/12 mx-auto lg:w-10/12 mt-8 lg:gap-10">
        <div className="lg:col-span-3 hidden lg:block h-fit border dark:border-maindark rounded-lg bg-white dark:bg-subdark sticky top-0 left-0">
          <div className="px-5 pt-10 pb-1">
            <div className="text-2xl font-bold dark:text-zinc-300 mb-8">Settings</div>
          </div>
          <div className="pb-24">
            {Listings.map((item, index) => (
              <div className="" key={index}>
                <div className="text-zinc-400 uppercase border-b dark:border-zinc-700 py-3 pr-3 text-sm w-11/12 ml-auto">{item.title}</div>
                <div className="flex flex-col dark:text-zinc-300">
                  {item.links.map((ele, i) => (
                    !ele.link ? <div className={`pr-3 py-4 flex items-center gap-4 text-sm pl-8 ${pathname === ele.link ? 'bg-slate-100 dark:bg-maindark' : ''}`} key={i}>  <div className={`size-6 ${ele.img}`}></div> {ele.title} <ToggleTag /> </div> :
                      <Link to={ele.link} className={`pr-3 py-4 flex items-center gap-4 text-sm pl-8 ${pathname === ele.link ? 'bg-slate-100 dark:bg-maindark' : ''}`} key={i}> <div className={`size-6 ${ele.img}`}></div> {ele.title}</Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="mb-3 lg:hidden">
            <div className="w-fit ml-auto"> <SetView onClick={() => setView(!view)} className='text-2xl cursor-pointer dark:text-zinc-300' /> </div>
            {view && <div className="">
              {Listings.map((item, index) => (
                <div className="" key={index}>
                  <div className="text-zinc-400 uppercase border-b dark:border-zinc-700 py-3 pr-3 text-sm w-11/12 ml-auto">{item.title}</div>
                  <div className="flex flex-col dark:text-zinc-300">
                    {item.links.map((ele, i) => (
                      !ele.link ? <div className={`pr-3 py-4 flex items-center gap-4 text-sm pl-8 ${pathname === ele.link ? 'bg-slate-100 dark:bg-maindark' : ''}`} key={i}>  <div className={`size-6 ${ele.img}`}></div> {ele.title} <ToggleTag /> </div> :
                        <Link to={ele.link} onClick={() => setView(false)} className={`pr-3 py-4 flex items-center gap-4 text-sm pl-8 ${pathname === ele.link ? 'bg-slate-100 dark:bg-maindark' : ''}`} key={i}> <div className={`size-6 ${ele.img}`}></div> {ele.title}</Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>}
          </div>
          {children}
        </div>
      </div>
    </>
  )
}

export default UserSettingsLayout
