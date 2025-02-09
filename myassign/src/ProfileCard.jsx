import { useEffect, useState } from "react";


export default function ProfileCard() {
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
    <div className="flex font-product  items-center justify-center min-h-screen bg-[#0f172a] p-4">
      <div className="w-80 py-5 shadow-lg relative shadow-indigo-500 border-4 [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl  border-transparent animate-border">
      
        <div className="flex justify-center mt-10">
          <img
            alt={`${user?.name?.first} ${user?.name?.last}`}
            src={user?.picture?.large}
            className="w-24 h-24 rounded-full border-4 border-indigo-400 shadow-lg"
          />
        </div>
        <h2 className="text-center text-2xl font-bold mt-4 text-white">  {user?.name?.first} {user?.name?.last}</h2>
        <p className="text-center text-gray-300 text-sm">{toTitleCase(user?.gender)}</p>
        
        <div className="flex justify-center mt-5 text-white">
          <button className="bg-indigo-400 text-white font-semibold  px-5 py-2 rounded-lg text-xs hover:scale-105 shadow-md hover:bg-indigo-500 transition-all">
          {user?.phone}
          </button>
        </div>
        
      </div>
    </div>
  );
}