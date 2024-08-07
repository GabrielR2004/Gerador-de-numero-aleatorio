import React from 'react'
import './App.css'

import Aleatorio from './assets/Aleatorio'

export default function () {
  return (
    <div>
      <Aleatorio min={1} max={60} />
    </div>
  )
}