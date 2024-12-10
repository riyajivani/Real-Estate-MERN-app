import './layout.scss'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <div className="layout">
      <Navbar/>
      </div>

    <Routes>
      <Route path="/"/>
      <Route path="/about"/>
      <Route path="/contact"/>
      <Route path="/other"/>
      <Route path="/signin" />
      <Route path="/signout"/>
    </Routes>
    </>
  )
}

export default App