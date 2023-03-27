import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/TelaPerfil'
import PaginaPadrao from './pages/PaginaPadrao'

function App() {

  return (
     <BrowserRouter>
      <Routes>

        <Route path='/' element={ <Home />} />
        <Route path='/perfil/naruto' element={<PaginaPadrao id={1}/>} />
        <Route path='/perfil/sasuke' element={<PaginaPadrao id={2} />} />
        <Route path='/perfil/kakashi' element={<PaginaPadrao id={3} />} />
        <Route path='/perfil/sakura' element={<PaginaPadrao id={4} />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
