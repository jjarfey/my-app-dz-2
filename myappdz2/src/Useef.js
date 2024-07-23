import React ,{useEffect, useState}from "react";

const Useef=()=>{

    const[name,setName] = useState('');

useEffect(()=>{
    console.log(`Имя изменено на - ${name}`);
},[name]);

return(
    <div>
    <h1>UseEffect</h1>
    {name && <h2>Привет -{name}</h2>}
    <input value={name} onChange={(event)=>{setName(event.target.value)} }placeholder={'введите имя'}/>
    </div>

);
}

export default Useef;
