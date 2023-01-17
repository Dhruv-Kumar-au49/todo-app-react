import React from 'react'
import { AddTask } from './AddTask'
import { Button } from './Button'

export const Header = ({changeMode,lightMode,addTask,showForm,formbtn}) => {
  return (
    <div className='header'>
      The Bat-tasks
      <Button title={lightMode ?"Light mode" :"Dark mode" }colour="white" onClick={() => changeMode()}/>

      <Button title={showForm?"Hide Form":"Add Task"} colour={showForm?"red":"green"}onClick={()=>formbtn()} />

      {showForm?<AddTask addTask={addTask}/>:<div></div>}

    </div>
  )
}

