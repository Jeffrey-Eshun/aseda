import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import SideBar from './Components/SideBar'
import './SideBar.css'
import  './Navbar.css'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <SideBar />
      <Outlet />
    </>
  )
}

export default App
