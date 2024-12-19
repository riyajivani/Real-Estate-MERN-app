import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/homepage/Home'
import List from './routes/listpage/List'
import Login from './routes/login/Login'
import { Layout } from './routes/layout/Layout'
import Singlepage from './routes/singlepage/Singlepage'
import Profile from './routes/profile/Profile'
import Register from './routes/register/Register'
import { RequireAuth } from './routes/layout/Layout'
import ProfileUpdate from './routes/profileUpdate/profileUpdate'

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/list",
          element:<List/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path:"/:id",
          element:<Singlepage/>
        }
      ]
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path:"/profile",
          element:<Profile/>
        },
        {
          path: "/profile/update",
          element: <ProfileUpdate />
        },
      ]
    }
  ])
  return (
      <RouterProvider router={router}/>
  )
}

export default App