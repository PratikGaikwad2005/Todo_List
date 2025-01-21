import { useState } from 'react'
import React from 'react'


const Todo = () => {

      const [todoState , setTodoState] = useState([])
    
       let submitForm = (event)=>{

      event.preventDefault();
      let todoInput = event.target.todoinput.value;          // to take a data from input

      if(!todoState.includes(todoInput)){
          let finalTodoState = [...todoState , todoInput]
          setTodoState(finalTodoState)
      }
      else{
          alert("Todo already exits")
      }

      
  }
     let list = todoState.map((value,index)=>{
       return(
        <TodoList value = {value} key={index} keyindex = {index} 
          todoState={todoState}
          setTodoState = {setTodoState}
        />
       )
     })


  return (
    <>
      <div className='todoForm'>
        <h1>Todo List</h1>
        <form onSubmit={submitForm}>
          <input type="text" name= "todoinput" placeholder="Enter your todo" />  <button>Submit</button>
         </form>
      </div>

    <div className='TodoDisplayList'>
        <ul>
          {list}
        </ul>
    </div>
    </>
  )
}

export default Todo
function TodoList({value , keyindex , todoState ,setTodoState}){
  const [complete , setCompleteTodo] = useState(false)
  let deleteRow = ()=>{
    let del = todoState.filter((v,i)=> i != keyindex)
    setTodoState(del)
  }
  
  return(
    <li className={(complete) ? 'completeTodo' : ''}  onClick={()=>{setCompleteTodo(!complete)}}>{keyindex+1}.    {value}<span onClick={deleteRow}>&times;</span></li>
  )
}



