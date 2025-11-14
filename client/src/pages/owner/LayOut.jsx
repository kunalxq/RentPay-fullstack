import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/owner/Sidebar'
import Navbarowner from '../../components/owner/Navbarowner'
import { useAppContext } from '../../context/AppContext'

const LayOut = () => {
  const {isOwner, navigate} = useAppContext();

  useEffect(() => {
    if(!isOwner){
      navigate('/')
    }
   },[isOwner]);

  return (
    <div className='flex flex-col'>
      <Navbarowner />
      <div className='flex'>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  )
}

export default LayOut
