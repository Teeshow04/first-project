import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainContent from './MainContent'
import Navbar from './navbar'

import MountFuji from './assets/fuji.png'
import SydneyOpera from './assets/sydney.png'
import Geirangerfjord from './assets/geiranger.png'


function Page() {
  return (
    <>
      <Navbar/>
      <MainContent
        img={MountFuji}
        country="JAPAN"
        location="Mount Fuji"
        date="12 Jan, 2025-24 Jan, 2025"
        description="Mount Fuji is the highest mountain in Japan, standing at 3,776 meters (12,388 feet). It's a popular tourist spot for both locals and foreigners."
        mapLink="https://maps.app.goo.gl/y2rdMafn9Zza4yW68"
      />
      <MainContent
        img={SydneyOpera}
        country="AUSTRALIA"
        location="Sydney Opera House"
        date="27 May, 2025-8 June, 2025"
        description="The Sydney Opera House is one of the most recognizable buildings of the 20th century, located on the harbor in Sydney, Australia."
        mapLink="https://maps.app.goo.gl/NiG91S6DvHmr4VZRA"
      />
      <MainContent
        img={Geirangerfjord}
        country="NORWAY"
        location="Geirangerfjord"
        date="01 Oct, 2025-18 Nov, 2025"
        description="The Geiranger Fjord is located in the Sunnmøre region of Norway and is a UNESCO World Heritage site."
        mapLink="https://maps.app.goo.gl/AMQoAxiohyadyN4a7"
      />
    </>
  )
}

export default Page;
