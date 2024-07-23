import React,{ useState} from "react";

const List =(props)=>{

    const[item,setItem]=useState(props.items);

//КОМПОНЕНТ List ПРИНИМАЕТ МАССИВ items в качестве props и использует его для инициализации своего состояния
    function addItem(localItem){
        setItem([...item, localItem]);          // будет создаваться новый массив куда будет конкатинироваться ... в старые item , новые localItem

    }




    return(
     <div>
     <h1>Зависимость рендеринга от props</h1>
     <ul>
        {item.map((el,index) => {
            return <li key={index}>{el}</li>
        })}
     </ul>
     <button onClick={()=>addItem('item-3')}>Add Item</button>
    
     


     </div>

    );
};


export default List;