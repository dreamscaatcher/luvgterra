import React from 'react'
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <div>
    <nav>
      <Link exact to ="/">Home</Link>
      <Link to = "/About">About</Link>
      <Link to = "/Contact">Contact</Link>
    </nav>
    </div>
  )
}
