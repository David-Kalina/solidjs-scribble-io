import { Router, useRoutes } from 'solid-app-router'
import { Component, lazy } from 'solid-js'

const routes = [
  {
    path: '/',
    component: lazy(() => import('./pages/index')),
  },
  {
    path: '/register',
    component: lazy(() => import('./pages/Register')),
  },
  {
    path: '/login',
    component: lazy(() => import('./pages/Login')),
  },
  {
    path: '/create/:id',
    component: lazy(() => import('./pages/Create')),
  },
]

const App: Component = () => {
  const Routes = useRoutes(routes)

  return (
    <Router>
      <div class="h-screen w-screen flex items-center justify-center">
        <Routes />
      </div>
    </Router>
  )
}

export default App
