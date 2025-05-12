import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './components/private/PrivateRoute';
import './App.css'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { LoginPage } from './pages/Login'
import { PageNotFound } from './pages/PageNotFound'
import { Cadastro } from './pages/Cadastro'; 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />
          <Route path="/cadastro" element={
            <PrivateRoute>
              <Cadastro />
            </PrivateRoute>
          } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
