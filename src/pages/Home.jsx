import React from 'react'
import {Banner, Services} from '../components/@home'

import About from '../components/@home/faq/About'
import DoctorsTips from '../components/DoctorsTips'


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
