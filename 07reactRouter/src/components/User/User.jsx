import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid}=useParams()
  return (
    <div className='text-grey-600 bg-red-300 p-4 text-3xl'>User:{userid}</div>
  )
}

export default User