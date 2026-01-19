import React from 'react'
import ChildB from './ChildB'

function ChildA(props) {
    console.log(props.arr)
    return (

        <div>
            ChildA
            <br />
            Number :{props.num} <br />
            String :{props.str} <br />
            IsPassed :{props.isPassed.toString()}
            <br />
            Array Element
            {
                props.arr.map((v,i)=>(
                    <div>{v}</div>
                ))
            }
            {props.arr.join(",")}
            <br />
            <ChildB num={props.num}/>
        </div>
    )
}

export default ChildA