import React from "react"

import { NavLink } from "react-router-dom"

import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap"



const CatIndex = ({ cats }) => {

    return(
        <main className="cat-index-cards">
        {cats?.map((value, index) => {
          return (
            <Card
              body
              color="light"
              style={{
                width: '18rem'
              }}
            >
              <img
                className="image" alt={`profile of a value named ${value.name}`}
                src={value.image}
              />
              <CardBody className="card_body">
                <CardTitle className="card_title" tag="h5">
                {value.name}
                </CardTitle>
                <CardSubtitle
                  className="card_subtitle"
                  tag="h6"
                >
                  Age: {value.age}
                </CardSubtitle>

                <NavLink to={`/catshow/${value.id}`} className="nav-link">
                  See More Details
                </NavLink>


                <CardText>
            
                </CardText>
                <Button>
                  Click to see profile
                </Button>
 
              </CardBody>
            </Card>
          )
        })}
      </main>
    )
}

export default CatIndex
