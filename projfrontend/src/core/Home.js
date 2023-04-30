import React from 'react'
import Base from './Base'
import Slider from './Slider'
import Menu from './Menu'
import Faq from "../user/Faq"
export default function Home() {
  return (
    <div>
      <Menu/>
      <Slider/>
      <Faq/>
      <Base/>
    </div>
  )
}
