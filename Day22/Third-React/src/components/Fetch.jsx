import React, { useEffect, useState } from 'react'
import axios from "axios"

function Fetch() {
    let [data, setData] = useState([]);

    async function getData() {
        // let res= await fetch("https://jsonplaceholder.typicode.com/posts");
        // let dataList = await res.json();

        let res= await axios.get("https://jsonplaceholder.typicode.com/posts")
        setData(res.data) ;
    }

    useEffect(() => {
        getData()
    }, [])

    console.log("data",data)
    return (
        <div>
            Fetch
        </div>
    )
}

export default Fetch