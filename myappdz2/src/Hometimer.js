import React,{useState, useEffect } from "react";
import "./Hometimer.css";

const Hometimer=()=>{
    

    const [seconds, setSeconds] = useState(1);

    
    useEffect(() => {
        const timer = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);
        
     //   очистка интервала
        return () => clearInterval(timer);
      });
      const decreaSecond =()=>{ 
        setSeconds(seconds-10);
    };

    // const increaseSecond =()=>{ 
    //     setSeconds(seconds+10);
    // }
   const [word, setWord] = useState("через 10 секунд");
   

  

useEffect(() =>{ if(seconds===10){setWord("время настало")
  
}
else if(seconds>=20){setWord("время прошло!!!")
  
}
  
}, );

   
  
    //const valueIn =(e)=>{setWord(e.target.value)}
    //  const valueWord =useRef(' good morning!!')
    return(
        <div className="timer">
            <h1>Timer</h1>
            <input value={seconds}   onKeyDown={decreaSecond}></input>
            <span >{word} </span>
        </div>
    );
    };

export default Hometimer;