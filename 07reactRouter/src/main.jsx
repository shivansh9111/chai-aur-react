import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Layout from './Layout.jsx'
import Home from "./components/home/Home.jsx"
import About from "./components/about/About.jsx"
import Contact from "./components/contact/Contact.jsx"
import User from './components/User/User.jsx'
import Github,  { GithubInfoLoader } from './components/Github/Github.jsx'



// const router= createBrowserRouter([{
//   path : '/', element: <Layout/>,
//   children:[{path:"", element: <Home/> }, {path:"About", element: <About/>},{path:"contact", element: <Contact/>}]
// }])  another way =>

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
     <Route path='' element={<Home/>}/>
     <Route path='About' element={<About/>}/>
     <Route path='Contact' element={<Contact/>}/>
     <Route path='user/:userid' element={<User/>}/>
     {/* <Route path='github' element={<Github/>}/> */}
     <Route loader={GithubInfoLoader} path='github' element={<Github/>}/>
  </Route>
))



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
