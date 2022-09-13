// import { ADD,REDUCE } from "./actionTypes"; 
// const reducer =(oldState,action)=>{
//     const {type,payload}=action;
//     console.log("inside reducer",type,payload)
//     switch(type){
//         case ADD:
//         return{...oldState, count:oldState.count+payload};
//         case REDUCE:
//         return{...oldState, count:oldState.count-payload};
//         default:
//         return oldState;
//     }
// };
// export { reducer };



///...........................day.............

// import { ADD,REDUCE } from "./actionTypes"; 

import * as types from "./actionTypes";

const initialState={
    count:12,
    todos:[],
    isLoading:false,
    isError:false,

};
const reducer =(oldState=initialState,action)=>{
    const {type,payload}=action;
    // console.log("inside reducer",type,payload)
    switch(type){
        
        case types.ADD:
        let tempCount=
      oldState.count+payload>=100?100: oldState.count+payload;
        return{...oldState,count:tempCount};
      case types.REDUCE:
        return{...oldState, count:oldState.count-payload};
        
        case types.GET_TODOS_REQUEST:{
   return{...oldState,isLoading:true}
        }

        case types.GET_TODOS_SUCCESS:{
            return{...oldState,isLoading:false,todos:payload}
        }

        case types.GET_TODOS_FAILURE:{
         return{...oldState,isLoading:false, todos:[],isError:true};
        }


        default:
        return oldState;
    }
};
export { reducer };