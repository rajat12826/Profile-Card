import logo from './logo.svg';

import { useEffect } from 'react';
import { useState } from 'react';

import ProfileCard from './ProfileCard';

function App() {
  const[user,setuser]=useState(null)
  useEffect(()=>{
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
    .then((res)=>res.json())
    .then((data)=>{
      setuser(data.results[0])
    })
    console.log(user);
    
  },[])
  function toTitleCase(str) {
    if(str==undefined){
      return
    }
    console.log(typeof str);
    
    return str.replace(
      /\w\S*/g,
      text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    );
  }
  return (

<ProfileCard/>
  );
}

export default App;
