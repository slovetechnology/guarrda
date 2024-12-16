import React from 'react'
import LoginFormComponent from './LoginFormComponent'

function AdminLogin({HandleLoginAction}) {
  return (
    <div>
        <LoginFormComponent HandleLoginAction={HandleLoginAction} role='admin' />
    </div>
  )
}

export default AdminLogin