import React from 'react'
import Header from "./components/Header"
import Icons from './components/Icons'
import Home from "./components/Home"
import "./Styles/App.css"

const App = () => {
  return (
    <div>
      <Header/>
    
      <div className='main-section'>
            <Icons/>
            <Home/>
      </div>
    </div>
  )
}

export default App
