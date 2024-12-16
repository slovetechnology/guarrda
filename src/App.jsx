import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AdminRouting, GeneralRouting, UserRouting } from '../routes'
import UserLayout from './components/user/UserLayout'
import { useSelector } from 'react-redux'
import AdminLayout from './components/admin/AdminLayout'
import { Toaster } from 'sonner'

function App() {
  const {theme} = useSelector(state => state.data)
  return (
    <div className={`${theme} bg-bg dark:bg-maindark text-zinc-600`}>
      <BrowserRouter>
    <Routes>
      {UserRouting.map((item, index) => (
        <Route key={index} path={`/app${item.path}`} element={<UserLayout> <item.element /> </UserLayout> } />
      ))}
      {GeneralRouting.map((item, index) => (
        <Route key={index} path={`${item.path}`} element={<item.element /> } />
      ))}
      {AdminRouting.map((item, index) => (
        <Route key={index} path={`/portal/admin${item.path}`} element={<AdminLayout> <item.element /> </AdminLayout> } />
      ))}
    </Routes>
    </BrowserRouter>
    <Toaster richColors />
    </div>
  )
}

export default App