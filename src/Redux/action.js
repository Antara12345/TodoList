//
import { ADD,REDUCE,GET_TODOS_REQUEST,GET_TODOS_SUCCESS,GET_TODOS_FAILURE, POST_TODO_REQUEST, POST_TODO_SUCCESS, POST_TODO_FAILURE } from "./actionTypes";
const handleAddActionObj=(payload)=>{
    return{
        type: ADD,
        payload,
    };
};
const handleReduceActionObj=(payload)=>{
    return{
        type: REDUCE,
        payload,
    };
};
const getTodosRequest=()=>{
    return{
        type: GET_TODOS_REQUEST
    }
};

const getTodosSuccess=(payload)=>{
    return{
        type: GET_TODOS_SUCCESS,
        payload,
        
    }
};

const getTodosFailure=()=>{
    return{
        type: GET_TODOS_FAILURE
    }
}

// .......................

const postTodoRequest=()=>{
    return{
        type: POST_TODO_REQUEST
    }
};

const postTodoSuccess=(payload)=>{
    return{
        type: POST_TODO_SUCCESS,
        payload,
        
    }
};

const postTodoFailure=()=>{
    return{
        type: POST_TODO_FAILURE
    }
}



export {handleAddActionObj,handleReduceActionObj,getTodosRequest,getTodosSuccess,getTodosFailure,postTodoFailure,postTodoRequest,postTodoSuccess }
