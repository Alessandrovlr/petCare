import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { PageNotFound } from './pages/PageNotFound'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
