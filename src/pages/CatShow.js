import React from "react"
import { useParams } from "react-router-dom"

const CatShow = ({ cats }) => {
    const { id } = useParams()
    let currentCat = cats.find((value) => cats.id === +id)
    console.log(id)
    return(
        <>
            <h3>CatShow</h3>
        </>
    )
}

export default CatShow