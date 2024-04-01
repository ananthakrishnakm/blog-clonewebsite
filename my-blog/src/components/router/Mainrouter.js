import React from 'react'
import Admin from '../adminpanel/Admin'
import { Route, Routes } from 'react-router-dom'
import Mainlayout from '../mainlayout/Mainlayout'

const MainRouter = () => {
  return (
    <>
      <Routes>
      <Route path='/' element={<Mainlayout />} />
        <Route path='/admin' element={<Admin/>} />
      </Routes>
    </>
  )
}

export default MainRouter