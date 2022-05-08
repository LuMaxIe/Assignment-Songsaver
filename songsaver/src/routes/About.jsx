import React from 'react'
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>About</h2>
      <Link to="/" className='about-link'>Home</Link>
      <p>I really liked this assignment and has teached me a lot. I know that there are still a lot of improvements to be made:</p>
      <ul>
        <li>Style the ratings select box</li>
        <li>Better indications/labels for the filters</li>
        <li>Make more use of the scss functionalities</li>
        <li>Add home route to logo</li>
      </ul>
    </main>
  )
}
