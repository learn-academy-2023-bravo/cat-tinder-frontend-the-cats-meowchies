import React from "react"
import { useParams } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap"

const CatShow = ({ cats }) => {
    const { id } = useParams()
    let currentCat = cats.find((value) => value.id === +id)
    

    return(
        <main> 
            {currentCat && (
                <>
                    <Card
              body
              color="light"
              style={{
                width: '18rem'
              }}
            >
              <img
                className="image" alt={`profile of a value named ${currentCat.name}`}
                src={currentCat.image}
              />
              <CardBody className="card_body">
                <CardTitle className="card_title" tag="h5">
                {currentCat.name}
                </CardTitle>
                <CardSubtitle
                  className="card_subtitle"
                  tag="h6"
                >
                  Age: {currentCat.age}
                </CardSubtitle>

               


                <CardText>
                    {currentCat.name} enjoys, {currentCat.enjoys}

            
                </CardText>
                </CardBody>
                </Card>


                  
                </>
            )}
        </main>
    )
}

export default CatShow