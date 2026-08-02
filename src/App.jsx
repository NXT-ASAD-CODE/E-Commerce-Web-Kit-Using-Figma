import React from 'react'
import PrimarySearchAppBar from './components/Appbar'
import Landingpage from './components/Landingpage'
import ClientsSectionLogo from './components/Scroller'
import NewArrival from './components/NewArrival'


function App() {
  return (
    <div>
      <PrimarySearchAppBar/>
      <Landingpage/>
      <ClientsSectionLogo/>
      <NewArrival/>
    </div>
  )
}

export default App