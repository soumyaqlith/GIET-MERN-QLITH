import React from 'react'

function Card(props) {
  return (
    <div className='p-5 shadow rounded hover:scale-105 transition'>
        <img src={props.obj.img} alt="hii" width={200}/>
        <h3>{props.obj.title}</h3>
        <p>{props.obj.desc}</p>
    </div>
  )
}

export default Card