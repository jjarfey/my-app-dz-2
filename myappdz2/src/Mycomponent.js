// создоем компонент и пропсы
import React, { useEffect, useState } from "react";
 
const initialState =() =>{          // можно создать ф-цию где возвращается значение по умолчанию -1
    return -1;
}

const MyComponent =(props)=>{

    const [counter,setCounter]= useState( initialState);     // сначала наше состояние ровно 0 \(initialState)ссостояние заданное функцией

    const handlerSetCounter =()=>{                 // ф-ция handlerSetCounter привязанна к событию onClick={handlerSetCounter}>, 
        setCounter(counter+1);                // useState принимает значение setCounter в котором (counter+1), при каждом клике
    }
        const [isOpened, setIsOpened]= useState(false);
    
    const {props2} = props;    // способ деструктуризация , теперь можно просто писать <p>{props2}</p>, а не {props.props2}

    const[x,setx]=useState(5);        // состояние координаты x, по умолчанию -5
 //  useEffect(() => {document.body.addEventListener('mousemove',(event)=>{setx(window.event.clientX)})},[]);  //спомощью useEffect
   // первый аргумент -колбэк, где обращаемся к document,непосредственно к body, вешаем обработчика событий 'mousemove'=> передаем ф-цию
   //где setx принимает значения window.содержащие в себе координаты курсора мыши по оси X, 

   const handlerSetMouseMove =(event) =>{         // еще вариант отслеживания координаты х , только относительно строки div
    setx(event.clientX);                      // event.clientX Свойство event.clientX содержит в себе координаты курсора мыши по оси X. Для определения координат есть также свойства event.clientY, event.pageX, event.pageY.
   }
return(
    <>
    <p>{props.props1}</p>
    <p>{props2}</p>
    <button onClick={handlerSetCounter}> Click Me</button>
    <button onClick={()=>setIsOpened(!isOpened)}> {isOpened ? 'скрыть строку':'Показать строку' }</button>
    <p>counter -{counter}</p>
    {isOpened && <div>
        <span>Это строка, всем привет!!</span>
         </div>}
         <hr></hr>
         <div onMouseMove={handlerSetMouseMove} >
            Координата мыши (Х) -{x}
         </div>
    </>
)
}

export default  MyComponent;