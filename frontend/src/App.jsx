import { useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [Names,setNames]=useState([]);
  useEffect(() => {
    axios.get('/api/names')
    .then((Response)=>{
      setNames(Response.data);
    })
    .catch((error)=>{
      console.log(error);
    })

    
  })

  return (
    <>
    <div>
<h1>chai and full stack</h1>
 <h1>number of names:{Names.length}</h1>
 {
  Names.map((item,id)=>(
  <div id={id}>
    <h1>{item.id}</h1>
  <h1>{item.name}</h1>
  </div>
  ))
 }
</div>
    </>

  )
}

export default App
