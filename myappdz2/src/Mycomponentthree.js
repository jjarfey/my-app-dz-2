import React, {useEffect, useState} from "react";

const Mycomponentthree=(props)=>{

    const[stateValue, setStateValue] = useState(props.propValue);

//КОМПОНЕНТ ПРИНИМАЕТ ПРОПС propValue, который используется для инициализации состояния stateValue при монтировании компонента

    useEffect(()=>{
        setStateValue(props.propValue);
    },[props.propValue]);

    return(
        <div>
            <h2> изменение props в родительском документе</h2>
            <p>Props-{props.propValue}</p>
            <p>State -{stateValue}</p>
            <button onClick={()=>setStateValue('изменение')}>Изменить состояние</button>
        </div>

    );
};


export default Mycomponentthree;