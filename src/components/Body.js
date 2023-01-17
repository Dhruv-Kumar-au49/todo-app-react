import React from 'react'

import { Task } from './Task';

export const Body = ({Data, onDelete}) => {


  return (
    <div>

{/* <Button title = "remove" colour = "red" onClick={onClick}/>
<Button title = "add" colour="green"onClick={onClick}/>
<Button title = "cancle"  colour="yellow"onClick={onClick}/> */}

{Data.map((item)=>(
<Task key={item.id} item={item} onDelete={onDelete}/>
))}



    </div>
  )
}
