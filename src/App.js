// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';
// import {store} from "./Redux/store"
// import {handleAddActionObj,handleReduceActionObj} from "./Redux/action"

// function App() {
//   // const [count,setCount]=useState(4);
//   const {dispatch,subscribe}=store;
//   const { count }=store.getState();
//   const [update,setUpdate]=useState(0)
   
//   //subscribe is a method......we can't use any other word than subscribe.
//   subscribe(()=>{
//     // console.log("state changed",store.getState());
//     setUpdate((prev)=>prev+1);
//     //setupdate is just re-rendrng and telling react that smthng has changed and u need to re-rendr this component.
//   });

//   // const handleAdd=()=>{
//   //   dispatch({type:"ADD",payload:1});
//   //   // console.log(store.getState());
//   // };

//   // const handleReduce=()=>{
//   //   dispatch({type:"REDUCE",payload:1});
//   // };

  
//   return (
//     <div className="App">
//       <h1>Counter:{count}</h1>
//       {/* <button onClick={handleAdd}>Add</button>
//       <button onClick={handleReduce}>Reduce</button> */}
//        <button onClick={()=>dispatch(handleAddActionObj(3))}>Add</button>
//       <button onClick={()=>dispatch(handleReduceActionObj(2))}>Reduce</button>
//     </div>
//   );
// }

// export default App;



// ........................day5.....
import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';
// import {handleAddActionObj,handleReduceActionObj} from "./Redux/action"
// import { useDispatch, useSelector } from 'react-redux';
// import {store} from "./Redux/store"
import Counter from './Components/Counter';
import Todos from './Components/Todos';
function App() {
  // // const [count,setCount]=useState(4);
  // // const {dispatch,subscribe}=store;
  // // const { count }=store.getState();
  // // const [update,setUpdate]=useState(0)
   
  // //subscribe is a method......we can't use any other word than subscribe.
  // // subscribe(()=>{
  // //   // console.log("state changed",store.getState());
  // //   setUpdate((prev)=>prev+1);
  // //   //setupdate is just re-rendrng and telling react that smthng has changed and u need to re-rendr this component.
  // // });

  // // const handleAdd=()=>{
  // //   dispatch({type:"ADD",payload:1});
  // //   // console.log(store.getState());
  // // };

  // // const handleReduce=()=>{
  // //   dispatch({type:"REDUCE",payload:1});
  // // };
  

  // //useSelector help us to ACCESS the data inside our Redux Store.
  // const count=useSelector((store)=>{    //....u can use any word instead od store..//
  //   return store.count;
  // });
  // console.log(count)
  // const dispatch=useDispatch();
  // return (
  //   <div className="App">
  //      <h1>Counter:{count}</h1>
  //     <button onClick={()=>dispatch(handleAddActionObj(3))}>Add</button>
  //     <button onClick={()=>dispatch(handleReduceActionObj(2))}>Reduce</button>  
  //   </div>
  // );
  return(
    <div className="App">
 <Counter/>
 <Todos/>
    </div>
  );
 
}

export default App;

