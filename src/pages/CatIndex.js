import React from "react"

import { NavLink } from "react-router-dom"

import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap"



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
                

               


                <CardText>
            
                </CardText>
                <NavLink
                    id="button1"
                    className="self-end"
                    to={`/catshow/${value.id}`}
                    
                  >
                    <button>Click to see your puuurrrfect options</button>
                </NavLink>
        
 
              </CardBody>
            </Card>
          )
        })}
      </main>
    )
}

export default CatIndex
