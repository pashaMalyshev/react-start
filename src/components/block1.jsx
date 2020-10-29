import React from 'react'
import '../App.css'

function Block1({ wolfsValue, counter }) {
  return (
    <div className='block1'>
     {wolfsValue} | {counter}
    </div>
  )
}

export default Block1

