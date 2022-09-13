
import { useState } from 'react';
import {handleAddActionObj,handleReduceActionObj} from "../Redux/action"
import { useDispatch, useSelector } from 'react-redux';


function Counter(){
      // const [count,setCount]=useState(4);
  // const {dispatch,subscribe}=store;
  // const { count }=store.getState();
  // const [update,setUpdate]=useState(0)
   
  //subscribe is a method......we can't use any other word than subscribe.
  // subscribe(()=>{
  //   // console.log("state changed",store.getState());
  //   setUpdate((prev)=>prev+1);
  //   //setupdate is just re-rendrng and telling react that smthng has changed and u need to re-rendr this component.
  // });

  // const handleAdd=()=>{
  //   dispatch({type:"ADD",payload:1});
  //   // console.log(store.getState());
  // };

  // const handleReduce=()=>{
  //   dispatch({type:"REDUCE",payload:1});
  // };
  

  //useSelector help us to ACCESS the data inside our Redux Store.
  const count=useSelector((store)=>{    //....u can use any word instead od store..//
    return store.count;
  });
  console.log(count)
  const dispatch=useDispatch();
  return (
    <div className="App">
       <h1>Counter:{count}</h1>
      <button onClick={()=>dispatch(handleAddActionObj(3))}>Add</button>
      <button onClick={()=>dispatch(handleReduceActionObj(2))}>Reduce</button>  
    </div>
  );
}
export default Counter