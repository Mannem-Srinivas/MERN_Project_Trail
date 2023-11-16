import Carousel from './Carousel'
import Events from './Events'
import { useState } from 'react';
import './style.css'

const LocalStorageEventCards = () => {
  let AllEventCard = localStorage.getItem('AllEventCards');
  if (AllEventCard) {
    return (
      JSON.parse(localStorage.getItem('AllEventCards'))
    )
  }
  else {
    return [];
  }
}

export default function Home() {

  // eslint-disable-next-line
  const [allevents, setAllEvents] = useState(LocalStorageEventCards());

  return (
    <div className='Home'>
      <Carousel />
      <Events eventcard={allevents} />
    </div>
  )
}