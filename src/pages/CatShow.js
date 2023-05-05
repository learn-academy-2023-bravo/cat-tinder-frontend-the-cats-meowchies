import React from "react"
import { useParams } from "react-router-dom"

const CatShow = ({ cats }) => {
    const { id } = useParams()
    let currentCat = cats.find((value) => value.id === +id)
    

    return(
        <main> 
            {currentCat && (
                <>
                    <img
                    alt={`profile of a cat named ${currentCat.name}
                    `}
                    src={currentCat.image}
                    
                    />
                </>
            )}
        </main>
    )
}

export default CatShow