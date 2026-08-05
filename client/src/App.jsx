import React from 'react'
import { Route, Router } from 'react-router-dom'
import Layout, { AuthLayout, GuestLayout } from './pages/Layout'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'
import BuilderPage from './pages/BuilderPage'
import PreviewPage from './pages/PreviewPage'

const App = () => {
  return (
    <Router>
      {/* Login Routes */}
      <Route element={<GuestLayout/>}>
        <Route path='/login' element={<AuthPage mode="login"/>}/>
        <Route path='/register' element={<AuthPage mode="register"/>}/>
      </Route>

      {/* Protected Routes */}
      <Route element={<AuthLayout/>}>
        <Route path='/' element={<HomePage />}/>
        <Route path='/builder/:id' element={<BuilderPage />}/>
        <Route path='/preview/:id' element={<PreviewPage />}/>
      </Route>
    </Router>
  )
}

export default App
