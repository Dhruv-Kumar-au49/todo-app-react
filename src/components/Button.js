import React from 'react'

export const Button = (props) => {
    const {colour,title,}=props
  return (
    <div>

<button {...props} className='btn' style={{ backgroundColor:colour}}> {title}</button>

    </div>
  )
}
