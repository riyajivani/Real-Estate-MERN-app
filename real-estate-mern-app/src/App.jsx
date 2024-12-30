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
import NewPostPage from './routes/newPostPage/newPostPage'
import { singlePageLoader, listPageLoader, profilePageLoader } from './lib/loaders'
import About from './routes/about/About'

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
          path: "/about",
          element: <About />
        },
        {
          path:"/list",
          element: <List />,
          loader: listPageLoader
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
          element: <Singlepage />,
          loader: singlePageLoader,
        }
      ]
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path:"/profile",
          element: <Profile />,
          loader: profilePageLoader
        },
        {
          path: "/profile/update",
          element: <ProfileUpdate />
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ]
    }
  ])
  return (
      <RouterProvider router={router}/>
  )
}

export default App