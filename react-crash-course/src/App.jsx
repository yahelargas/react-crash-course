import React from 'react'
import {createBrowserRouter , createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import AllJobsPage from './pages/AllJobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage from './pages/JobPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/jobs' element={<AllJobsPage/>}/>
      <Route path='/job/:id' element={<JobPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Route>
  )
)

const App = () => {
  return (
   <RouterProvider router={router}/>
  )
}

export default App