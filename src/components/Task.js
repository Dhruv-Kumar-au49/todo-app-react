import React from 'react'
import { Button } from './Button'

export const Task = ({item,onDelete}) => {
  
  return (
    <div className='people'>
       <h1>{item.Task}</h1>
    <p>{item.Date}</p>

    

    <Button title = "remove" colour = "red" onClick={()=>(onDelete(item.id))}/>

        </div>
        
  )
}
