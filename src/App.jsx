import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GeneralRouting, UserRouting } from '../routes'
import UserLayout from './components/user/UserLayout'
import { useSelector } from 'react-redux'

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
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App