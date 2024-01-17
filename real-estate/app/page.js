'use client'

import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Steps from './components/Steps/Steps'
import Projects from './components/Projects/Projects'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Steps />
      <Projects />
    </div>
  )
}
