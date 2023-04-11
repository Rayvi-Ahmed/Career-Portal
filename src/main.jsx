import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './Componant/ErrorPage/ErrorPage'
import Home from './Componant/Home/Home'
import Statistics from './Componant/Statistics/Statistics'
import AppliedJob from './Componant/Applied-job/AppliedJob'
import Blog from './Componant/Blog/Blog'
import JobDetails from './Componant/JobDetails/JobDetails'
import { getApplayJob } from './Componant/Utiles/GetApplayJob'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: '/detail/:id',
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch('jobs.json')

      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/applied job',
        element: <AppliedJob></AppliedJob>,
        loader: getApplayJob
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} ></RouterProvider>)
