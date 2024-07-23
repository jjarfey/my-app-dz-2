import React from "react";
import App from "./App.js";
import Input from '../src/Input.js';
import UserList from './userList.js';
import MyComponent from './Mycomponent.js';
import Useef from '../src/Useef.js';
import List from './Mycomponentwo.js';
import Mycomponentthree from './Mycomponentthree.js';
import Homecounter from './Homecounter.js';
import Hometimer from './Hometimer.js';
import MyApp from './Mycomponentfour.js'
import Mycomponentfive from './Mycomponentfive.js';
import { Routes, Route, Link } from 'react-router-dom';
import "./nav.css";

const Nav =()=>{
    return(
        <div className='router-nav-container container'>
        <nav>
          <ul>
          
          <li> <Link to="/App">урок СОЗДАНИЕ КОМПОНЕНТА App и ПРОПИСЫВАНИЕ СВОЙСТВ props</Link> </li>    
            <li> <Link to="/Input">Домашнее Задание input</Link> </li> 
            <li> <Link to="/UserLis">UserList</Link> </li>
            <li> <Link to="/MyComponent">MyComponent</Link> </li> 
            <li> <Link to="/Useef">Useef</Link> </li> 
            <li> <Link to="/List">List</Link> </li> 
            <li> <Link to="/Mycomponentthree">Mycomponentthree</Link> </li> 
            <li> <Link to="/Homecounter"> Домашнее Задание Homecounter</Link> </li> 
            <li> <Link to="/Hometimer">Домашнее Задание Hometimer</Link> </li> 
            <li> <Link to="/MyApp">MyApp</Link> </li>         
            <li> <Link to="/Mycomponentfive">Mycomponentfive</Link> </li>       
            
          </ul>
          
            
          
        </nav>  
        
       

     
      <Routes>
      <Route path='/App' element={<App title="Hello Im title" description="Hello Im description"/>}/>
      <Route path='/Input' element={<Input />}/>
      <Route path='/UserLis' element={<UserList/>}/>
      <Route path='/MyComponent' element={<MyComponent props1 ={'props-1'} props2 ={'props-2'}/>}/>      
       
      <Route path='/Useef' element={<Useef/> }/>
      <Route path='/List' element={<List items={['item-0,item-1, item-2']} /> }/> 
      <Route path='/Mycomponentthree' element={<Mycomponentthree propValue={'prop value2'}/>}/>
      <Route path='/Homecounter' element={<Homecounter/>}/>
        <Route path='/Hometimer' element={<Hometimer/>}/>
            <Route path='/MyApp/' element={<MyApp/>}/>
                <Route path='/Mycomponentfive' element={<Mycomponentfive label ={"Условный рендеринг"}/>}/>
                
      </Routes>
        </div>    
    );
};

export default Nav;