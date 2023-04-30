import React from 'react'
import Base from './Base'
import Slider from './Slider'
import Menu from './Menu'
import Faq from "../user/Faq"
import Aboutus from './Aboutus'
export default function Home() {
  return (
    <div>
      <Menu/>
      <Aboutus/>
      <Slider/>
      <Faq/>
      <Base/>
    </div>
  )
}
