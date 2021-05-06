import React from 'react'

export default function Header() {
  return (
    <header id="header">
      <nav className="menu">
        <a href="/">导航</a>
      </nav>
      <h1 className="logo">miaov.com</h1>
      <a className="user" href="/login">user</a>
    </header>
  )
}
