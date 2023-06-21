import { Route, Routes, useLocation } from 'react-router-dom'
import { Detail, Form, Home, Landing } from './views'
import NavBar from './components/NavBar/NavBar'
import style from "./App.css"

function App() {
  const location = useLocation()
  return (
    <div className={style.App}>
      {
        location.pathname !== '/' ? <NavBar/> : null
      }
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/create" element={<Form/>}/>
      </Routes>
    </div>
  )
}

export default App
