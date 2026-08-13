import React, { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Sidebar from './component/SideBar'
import RecipeDetail from './component/RecipeDetail'

const App = () => {
  const [selectRecipe, setSelectRecipe] = useState(null)
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar setSelectRecipe={setSelectRecipe} />
        <RecipeDetail recipe={selectRecipe} />
      </div>
    </>
  )
}

export default App