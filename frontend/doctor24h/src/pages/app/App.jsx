import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../home'
import Login from '../login'
import Register from '../register'
import Start from '../start'
import RoutesConstants from '../../constants/RoutesConstants'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesConstants.REGISTER} element={<Register/>}/>
        <Route path={RoutesConstants.LOGIN} element={<Login/>}/>
        <Route path={RoutesConstants.HOME} element={<Home/>}/>
        <Route path={RoutesConstants.START} element={<Start/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
