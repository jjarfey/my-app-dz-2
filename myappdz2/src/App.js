
import React, {useEffect, useState} from 'react';




import "./App.css" ;    // инпорт стилей

const styles ={ color: "blue", fontSize: "30px"}; //  прописываем стили в пропсах
export default function App(){

  const [number, setNumber] = useState(0);

//useEffect -принимает два аргумента 1 колбэк (функция , которая выплнитсяв момент рендорринга или обновления), 2 (пустой массив)
//(Math.random() сгененрированное случайное число от 0до 9{setNumber(Math.random()* 1000)} умножили на тысячу
// Math.floor() метод округляющий к нижнейграници
// если убрать второй аргумент , то будет происходить постоянное онавление страницы, и каждый раз рендорится новое число
useEffect(() => {setNumber(Math.random()* 1000)},[]);

  return(
    <div className='App'>
     
      <h1 className='red'>Привет число</h1>
      <div className='num'>Я число -{number}
      </div>
      <div style={styles}>THE END
      </div>

  
      
      
    </div>

    
  );
}