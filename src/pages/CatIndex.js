import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, } from "reactstrap"
import { NavLink } from "react-router-dom"

const CatIndex = ({ cats }) => {

    return(
        <main className="cat-index-cards">
        {cats?.map((value, index) => {
          return (
            <Card
              style={{
                width: "14rem"
              }}
              key={index}
            >
              <img alt={`profile of a value named ${value.name}`} src={value.image} />
              <CardBody>
                <CardTitle tag="h5">{value.name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Age: {value.age}
                  <br/>
                  Enjoys: {value.enjoys}
                </CardSubtitle>
                <NavLink to={`/catshow/${value.id}`} className="nav-link">
                  See More Details
                </NavLink>

              </CardBody>
            </Card>
          )
        })}
      </main>
    )
}

export default CatIndex