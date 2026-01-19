import React, { useEffect, useState } from 'react'

function CheckUseEffect() {
    let [count, setCount] = useState(0);
    let [total, setTotal] = useState(0);
    // // syntax
    // useEffect(() => {
    //     // effect code 
    // }, []);

    // case :1
    // it will execute at every render
    // useEffect(() => {
    //     console.log("render");
    // })

    // case 2
    // it will execute at first render
    // useEffect(() => {
    //     console.log("it will execute at first render")
    // }, [])

    // case 3
    // it will execute based on the depe
    useEffect(()=>{
        console.log("it will execute based on the depe")
    },[count,total]);

    return (
        <div>
            Count :{count}
            <br />
            <button onClick={() => setCount(count + 1)}>Inc</button>
            <br />
            Total :{total}
            <br />
            <button onClick={() => setTotal(total + 1)}>Inc</button>
        </div>
    )
}

export default CheckUseEffect