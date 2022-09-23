import React from 'react'
import {Banner, Services} from '../components/@home'
import DoctorsTips from '../components/@home/DoctorsTips/DoctorsTips'
import About from '../components/@home/faq/About'


export default function Home() {
  return (
    <section >
      <Banner />
      <Services/>
      <About />
      <DoctorsTips/>
    </section>
  )
}
