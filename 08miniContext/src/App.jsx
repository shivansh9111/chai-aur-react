
import Usercontextprovider from "./context/Usercontextprovider"
import './App.css'

import Login from './components/Login'
import Profile from './components/Profile'

function App() {
 
  return (
    <Usercontextprovider>
      <h1>chai aur react is best</h1>
      <Login/>
      <Profile/>
    </Usercontextprovider>
  )
}

export default App
