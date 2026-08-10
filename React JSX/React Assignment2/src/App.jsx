import React from 'react'
import loader from './component/loader'
import Navbar from './component/Navbar'
import sideBar from './component/sideBar'
import './App.css'
const App = () => {
  return (
    <>
      {loader()}
      {Navbar()}
      {sideBar()}
    </>
  )
}

export default App