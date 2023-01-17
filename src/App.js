

import { useState } from 'react';
import {Body} from './components/Body'
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {


let [Data, setData]=useState([]);
  

let [lightMode, setlightMode] = useState(true)
// for changeing the mode 
let changeMode = () =>{
  setlightMode(!lightMode)
  console.log(`mode change`);
}
// show form 
let [showForm, setshowForm]= useState(true) 

let formbtn = ()=>{
  setshowForm(!showForm)
  console.log(`form btn`);
}

// add function

let addTask =  (data)=>{

  let id = Math.floor(Math.random()*1000);
  let newData = {id, ...data};
 
  setData([...Data,newData])
}

// remove function

const removePeople =(id)=>{
  console.log(`Delete${id}`)
  setData(Data.filter( (e) => e.id !== id))
}
  return (
    <div className={lightMode? 'main-box' : 'light-box'} >
      <Header changeMode={changeMode} lightMode={lightMode} addTask={addTask} showForm={showForm} formbtn={formbtn}/>
   <Body Data={Data} onDelete={removePeople} />
   <Footer name="Dhruv"/>
   
      
    </div>
  );
}

export default App;
