import React from 'react'
import { Route, Router } from 'react-router-dom'
import Layout from './pages/Layout'
import AuthPage from './pages/AuthPage'

const App = () => {
  return (
    <Router>
      {/* Login Routes */}
      <Route element={<Layout/>}>
        <Route path='/login' element={<AuthPage mode="login"/>}/>
        <Route path='/register' element={<AuthPage mode="register"/>}/>
      </Route>
    </Router>
  )
}

export default App
