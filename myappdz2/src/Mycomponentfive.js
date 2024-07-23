import React, { useState } from "react";

const Mycomponentfive=(props)=>{
//ПРИМЕР С ЛОГИЧЕСКИМ ОПЕРАТОРОМ 
    // const disabled = props.disabled;
     // если свойство из пропсов disabled существует то класс добавится, если несуществует -ничего не добавится
    ///для кнопки сосдаем класс {disabled (это свойство из пропсов) &&(логический оператор и) "disabled"(название класса) }
    // return(
    //    <div>
    //     <h1>УПРАВЛЕНИЕ СТИЛЯМИ ИСПОЛЬЗУЯ ОПЕРАТОР УСЛОВНЫЙ</h1>
    //     <button className={disabled && "disabled"}>Click me</button>

    //    </div> 
    // );


// ПРИМЕР С ТЕРНАРНЫМ ОПЕРАТОРОМ ?

// const active = props.active;  // забираем из пропс свойство active
// создали кнопку прописываем класснэйм (спрашиваем у тернарного оператора , существует ли свойство active, 
 //если да то присваивается класс, если нет ничего не происходит)
// return(
//     <>
    
//     <button className={active ? "active":""}>active</button>
//     </>
// )

// ПРИМЕР С УСЛОВНЫМ РЕНДЕРИНГОМ

//const isLogged =props.isLogged;

//в {}скобках спрашивается isLogged ? (cуществует или нет), если существует кнопке присваивается класс "yes",
// если нет , -кнопке присваивается класс "no"

// return(
//     <>
//     {
//         isLogged? <button className="yes">yes</button>
//         :
//         <button className="no">no</button>
//     }
//     </>
// )

//ПРИМЕР С ИЗМЕНЕНИИЕМ СОСТОЯНИЯ

const [isValid,setIsValid]= useState(false);

const handleOnChange = (event)=>{              // создали функцию на событие (event)
    const inputEvent = event.target.value;    //  постоянная inputEvent- все что вписано в инпут
    const isValidValue = inputEvent.length > 5;  // постоянная isValidValue- постоянная inputEvent,длинною больше 5 символов
    setIsValid(isValidValue);                   //  присваивание значение для setIsValid--- вкотором будет значение из постоянная isValidValue

};
 // прописываем стили
 const styles ={
    border: isValid ? "5px solid green" : "5px solid red",
    padding: "10px",
    borderRadius:"10px",
    
 };

 return(
    <div>
         <h1>УПРАВЛЕНИЕ СТИЛЯМИ ИСПОЛЬЗУЯ ОПЕРАТОР УСЛОВНЫЙ</h1>
    <label>{props.label}</label>
    <br/>
    <input type="text" style={styles} onChange={ handleOnChange}></input>
    
    {isValid ? null : <p><strong>Введите 6 или боллее символов</strong></p>}

    </div>
 

 )


};



export default Mycomponentfive;