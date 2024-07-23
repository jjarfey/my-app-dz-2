import React from 'react';
import User from './User';

export default function UserList(){

    const users =[
        {id: 1, name: "John",email: "john@example.com"},
        {id: 2, name: "Jane",email: "jane@example.com"},
        {id: 3, name: "Bob",email: "bob@example.com"}
    ];
return(
    <div className='userlist-conteiner'>
    <h2>USER LIST</h2>
    <hr></hr>
    {users.map(                  //берем массив users,используем метод map() - это метод для работы с массивами в JavaScript, который создает новый массив на основе элементов исходного, где каждый элемент является результатом выполнения функции.
                                  //В качестве аргумента в map() выступает функция, которая вызывается для каждого элемента массива в порядке их расположения
        (user,index)=>
            <User id={user.id} name={user.name} email={user.email}/>

        
    )}
    
    </div>

)

}