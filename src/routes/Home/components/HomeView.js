import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import { Button } from '../../../components/ui/button'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>Welcome From React Redux!</h4>
    <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
    <Button onClick={onClick} label=' OK 7' />
  </div>
)

function onClick (e) {
  alert('Gotcha!')
}

export default HomeView
