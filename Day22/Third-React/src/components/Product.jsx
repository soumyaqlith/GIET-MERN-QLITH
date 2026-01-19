import React from 'react'
import { useParams } from 'react-router'

function Product() {
    let { userId } = useParams()
    return (
        <div>
            Product
            <br />
            Id :{userId}
        </div>
    )
}

export default Product