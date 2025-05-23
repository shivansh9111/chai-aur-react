import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from "./store/store.js"
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthLayout, Login, } from './components/index.js'

import Home from "./pages/Home.jsx"
import Signup from "./pages/Signup.jsx"
import AllPosts from "./pages/AllPosts.jsx"
import Addpost from "./pages/Addpost.jsx"
import EditPost from "./pages/EditPost.jsx"
import Post from "./pages/Post.jsx"

const router= createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {path:"/Login",
        element:(
        <AuthLayout authentication={false}>
             <Login />
             </AuthLayout>
             )
      },
      {
        path:"/Signup",
        element:(
        <AuthLayout authentication={false}>
          <Signup />
        </AuthLayout>
        )
      },
      {
        path:"/AllPosts",
        element:(
        <AuthLayout authentication={""}>
          <AllPosts />
        </AuthLayout>
        )
      },
      {path:"/Addpost",
        element:(<AuthLayout authentication={""}>
          <Addpost />
        </AuthLayout>)
      },
      {path:"/EditPost/:slug",
        element:(<AuthLayout authentication>
          {""}
          <EditPost />
        </AuthLayout>)
      },
      {
        path: "/post/:slug",
        element: <Post />,
      }
    
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
