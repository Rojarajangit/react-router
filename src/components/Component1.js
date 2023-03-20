import React from 'react'

export default function Component1({name, profession, setname}) {
  return (
    <div>
      <h1>
        Component1=
        <p>
        {name} , {profession}
       </p>
        <button onClick={()=>{setname("qwert")}}>change name</button>
        </h1>
      
    </div>
  )
}
