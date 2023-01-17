import React, { useState } from "react";

export const AddTask = ({ addTask }) => {

    const [Task, setTask] = useState("");
    const [Date, setDate] = useState("");
  

let onSubmit = (e) => {
        e.preventDefault();
addTask({Task,Date})
        console.log(`click ${Task}`);
        setTask("")
        setDate("")
    };


    return (

        <form  onSubmit={onSubmit}>
        <div>
          <label>Enter Task Name</label>
          <input
            type="text"
            value={Task}
            onChange={(e) => setTask(e.target.value)}
          
          />
        </div>
  
        <div >
          <label>Enter Date</label>
          <input
            type="text"
            value={Date}
            onChange={(e) => setDate(e.target.value)}
            
          />
        </div>
  
        
  
        <input
          type="submit"
          style={{ background: "green" }}
        />
      </form>
  

    );
};
