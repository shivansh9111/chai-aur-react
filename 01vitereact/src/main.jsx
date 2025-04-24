import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp () {
  return <div>custom app !</div>
}
// const reactElement={
//   type: `a`,
//   props:{href:'http//google.com',
//           target:'_blank',
//         },
//         children:"click me to visit google" ,
const anotherUser="chai with shivansh"
const reactElement=React.createElement(
  'a',
  {href:"http//google.com", target:"_blank"},
  'click me to visit google $'
  , anotherUser
)

//const anotherElement=(<a href='http//google.com' target='_blank' anotherUser>visit google  </a>)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement)
