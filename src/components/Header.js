import React from 'react'
import './Header.css'

const Header = ({ setPage }) => (
  <header>
    <button type="submit" onClick={setPage('home')}>Home</button>
    <button type="submit" onClick={setPage('about')}>About</button>
    <button type="submit" onClick={setPage('projects')}>Projects</button>
    <button type="submit" onClick={setPage('contact')}>Contact</button>
  </header>
)

export default Header
