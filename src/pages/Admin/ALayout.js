import React from 'react'
import { Outlet } from 'react-router-dom'

const ALayout = () => {
  return (
    <div className='Layout'>
        ALayout Admin
        <Outlet />
    </div>
  )
}

export default ALayout