import React, { useState } from "react";
function TodoInput({addTodos}){
    const [text,setText]=useState("");

    const handleAdd=()=>{
     if(text){
        addTodos(text);
        setText("");
     }
    };
    return(
        <div>
      <input value={text} onChange={e=>setText(e.target.value)}/>
<button onClick={handleAdd}>Add Todo</button>
        </div>
    )
}
export default TodoInput;