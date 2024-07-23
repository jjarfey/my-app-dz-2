import React, {useRef, useState} from 'react';
import './input.css';

export default function Input(props){
     
  const [word, setWord] = useState(0);          //  useState() — это хук, который предназначен для работы с состоянием компонента в приложениях на React.**

  // Он работает только в функциональных компонентах и используется для:  
  // управления состоянием, в том числе передачи данных как пропсов другим компонентам;  
  // условного рендеринга — рендеринга тех или иных данных в зависимости от того, что хранится в состоянии;  
  // переключения состояния (true/false);
    // хранения данных, полученных от сервера.  
 // Хук useState() возвращает состояние (state) и функцию для его изменения (setState).
  const valueIn =(e)=>{setWord(e.target.value);}     //получили значение value
 
 
   
  const valueClear =useRef(' ')  //Хук useRef в React позволяет сохранить некоторый объект, который можно изменять и который хранится в течение всей жизни компонента.
  // В качестве параметра функция useRef() принимает начальное значение хранимого объекта. Возвращаемое значение — ссылка-объект, из свойства current которого можно получить хранимое значение.  
  // Распространённым примером применения useRef является хранение ссылки на html-элементы внутри компонента.  
  // Хук useRef может хранить любой объект и использоваться в различных ситуациях.
const onClickBut =(event)=> {
 // valueClear.current.value = ' ';               // назначил заменяемое значение value  " "(для ref)
  setWord(" ");                            // если не использовать ref  можно просто назначить функцию замены значения setWord на " "
setIsActive(current => !current);    // включен выключен
}

const [isActive, setIsActive] = useState(false);




       

     
    return(
        <div className={isActive? "inputbox" :"inputbox1"}>
          <h1 className='red'>Поле ввода</h1>
          <input type='text' ref ={valueClear} value={word} onChange={valueIn} className="inputin"></input>
          <button  onClick={onClickBut} className={isActive? "buttonstyle" :"buttonstyle1"}>clear</button>
         
          
          <div >THE END
          </div>
    
    
        </div>
    
        
      );
}
