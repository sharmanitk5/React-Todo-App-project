import logo from './logo.svg';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import { useEffect, useState } from 'react';



function App() {


  const[text,setText]=useState("");
  const[todo,setTodo]=useState([]);


  // useEffect(()=>{
  //  if(todo==="")
  //   setTodo([""])
   
  // },[]);
   function AddData(e){
          e.preventDefault();
          if(text=="") return;
       
  setTodo([...todo,{text:text,id:uuidv4(),}]);
   setText("");
         
       
   };
  const  DeleteData= (id)=>{

 
       setTodo([...todo].filter((todo)=>todo.id!==id)

    ) };
 
  return (
    <div className="App">
    <div className="container">
      <form onSubmit={AddData}>
        <input className="input" value = {text} onChange={e=>setText(e.target.value)} />
        <button className="button" onClick={AddData}>Add</button>
      </form>
      

        
        
          {todo.map((todo)=>(<div key={todo.id} className="Todo">
        <p>{todo.text}</p>
     
            <i className="far fa-trash-alt" onClick={()=>DeleteData(todo.id)}></i>
            </div>)

           )}
        
         
          
           
      
      
    

        
       
      

    
   
    </div>
    </div>
  );
}

export default App;
