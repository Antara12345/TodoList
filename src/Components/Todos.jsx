import TodoInput from "./TodoInput";
import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {getTodosFailure,getTodosRequest,getTodosSuccess, postTodoFailure, postTodoRequest, postTodoSuccess} from "../Redux/action";
function Todos(){
   const dispatch=useDispatch();
   const {todos,isLoading,isError}=useSelector((state)=>{
      return{
         todos:state.todos,
         isLoading:state.isLoading,
         isError:state.isError,
      };
   },shallowEqual);
   const getTodos=()=>{
      //to make reqst face make dispatch

      dispatch(getTodosRequest()); 

      axios.get("http://localhost:3000/todos")
      .then((r)=>{
         //Successful
          dispatch(getTodosSuccess(r.data))
      }).catch((error)=>{
         //Failure
         dispatch(getTodosFailure())
          console.log(error)
      });
   };

   //addTodo......................//
   const addTodos=(title)=>{
    if(title){
      const payload={
         title,
         status:false
      }

      dispatch(postTodoRequest())
       return axios.post("http://localhost:3000/todos",payload)
      .then(r=>{
         dispatch(postTodoSuccess());
      }).catch(e=>{
         dispatch(postTodoFailure());
      })
    }
   };
   const handleAddTodo=(text)=>{
      addTodos(text).then(()=>getTodos())
   }
  //first task get all the todos that we have in db.json...
    useEffect(()=>{
      getTodos();
    },[]);
  console.log(todos)
     return(
        <div>
        <h1>Todos</h1>
        <TodoInput addTodos={handleAddTodo}/>
        {todos.length>0&&todos.map(item=>{
         return(
            <div key={item.id}>
               {item.title}-{item.status?"True":"False"};
               </div>
         );
        })}
        </div>
     )
}
export default Todos;