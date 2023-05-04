import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"


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
              </CardBody>
            </Card>
          )
        })}
      </main>
    )
}

export default CatIndex