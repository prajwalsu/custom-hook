import React, { useState } from "react";

const useCounter=(initionalvalue)=>{
    const[count,setCount]=useState(initionalvalue)

    const increment=()=>{
        setCount(count+1)

    }

    const decrement=()=>{
        setCount(count-1)

    }

    const reset=()=>{
        setCount(0)

    }


return[count,increment,decrement,reset]
}

export default useCounter