import React, { useEffect, useState } from "react";
//import LoginForm from './ LoginForm.js';
//import WelcomeMessage from './WelcomeMessage.js';

// ----условный рендеринг с помощью конструкции if else---------

const MyApp =(props)=>{                //компонент принимает пропсы, например(нам надо посмотреть залогинился 
    //ли пользователь , это свойство приходит в пропсах, его надо декомпозировать)

//const {isLoggedIn} =props;     // достаем ео из пропсов
// if(isLoggedIn){
// return <WelcomeMessage/>       //  если он залогинен отправляем ему приветственное сообщение
// }
// else{return <LoginForm/>   // если нет то оправляем ему логинформу

// }

// ---- условный рендеринг с помощью тернарного оператора----
// т.е. если isLoggedIn такой логин существует, вернется <WelcomeMessage/>, если нет то <LoginForm/> 
// return(
//     <div>
//         {isLoggedIn ? <WelcomeMessage/> : <LoginForm/> }      
//     </div>
// );

// ---------- условный рендеринг с помощью логического оператора И---------

// const mytext=(props)={   // текстовый файл
//     const {text}  =props;   // содержит в себе тексты (пропсы)
//     return(
//     <div>
//     {text && <p>{text}</p>}  // помощью логического оператора И выводим текст(пропс), если он есть он рендерится
//     </div>
//     )
//}

// ---------- условный рендеринг с помощью  SWITCH ------------

// const Renderer =()=>{
//     const {value} =props;     //забираем вэлью из пропсов

//     switch(value){          //обращаемся к value
        
//     case'option-1':         // это 'option-1', то возвращается компонент <OPtion1Component/>
//         return<OPtion1Component/>
//     case'option-2':
//         return<OPtion2Component/>
//         default:                //если это ошибка , то возвращается компонент <DefaultComponent/>
//             return <DefaultComponent/>
//     }
//-----------условный рендеринг зависимость от состояния------------


const[shape,setShape]= useState(null);    // по дефолту , там должен быть (null)
const [randomNumber, setRandomNumber] = useState(null); //для соотояния рандомного числа

useEffect(()=>{
    const number =Math.floor(Math.random()*100);      // создаем рандомное число(Math.random(), спомощью Math.floor()округляем его, и все это умножаем на 100
    setRandomNumber(number);                   // сгенерированное число кладем в setRandomNumber()
    if(randomNumber > 20 ){setShape('circle');        // прописываем условие , если число больше 5 -выводим круг
    }else{setShape('sqrt');}                         // все остальное - квадрат
},[]);
return(
    <div>
        <h1>условный рендеринг зависимость от состояния</h1>
        <div>
            {shape ==="sqrt" ? 
            <div style={{
                width:"200px",
                height:"200px",
                background: "blue",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                {randomNumber}

            </div> :
             <div style={{
                width:"200px",
                borderRadius: "50%",
                height:"200px",
                background: "red",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
             }}>
                {randomNumber}
                </div>}
        </div>
    </div>
);
}


export default MyApp;