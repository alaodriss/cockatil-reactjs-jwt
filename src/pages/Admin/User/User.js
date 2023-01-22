import React from 'react'
import { useNavigate } from 'react-router-dom'


const User = () => {

  let navgite = useNavigate()

  const marcel = (userid) => {
    console.log('click')
    navgite("../edit/"+userid)
  }

  return (
    <div className='user'>
      User LISTE
      <button onClick={(e) => {marcel(4)}}> click </button>
    </div>
  )
}

export default User