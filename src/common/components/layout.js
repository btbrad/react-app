import React from 'react'
import Header from './header'
import Menu from './menu'
import '../css/reset.css'
import '../css/common.css'

export default function Layout(props) {
  console.log(props)
  return (
    <div>
      <Header />
      <Menu />
      <div id="main">
        { props.children } 
      </div>
    </div>
  )
}
