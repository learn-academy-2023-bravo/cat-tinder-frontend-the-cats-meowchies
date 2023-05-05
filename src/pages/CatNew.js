import React, { useState } from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"

const CatNew = ({ createCat }) => {
    const navigate = useNavigate()
    const [newCat, setNewCat] = useState({
        name: "",
        age: "",
        enjoys: "",
        image: ""
    })

    const handleChange = (e) => {
        setNewCat({ ...newCat, [e.target.name]: e.target.value })

    }
    const handleSubmit = () => {
        createCat(newCat)
        navigate("/catindex")
    }

    return(
        <>
            <Form>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" onChange={handleChange} value={newCat.name} />
                </FormGroup>
            </Form>
            <Form>
                <FormGroup>
                    <Label for="name">Age</Label>
                    <Input type="text" name="age" onChange={handleChange} value={newCat.age} />
                </FormGroup>
            </Form>
            <Form>
                <FormGroup>
                    <Label for="name">Enjoys</Label>
                    <Input type="text" name="enjoys" onChange={handleChange} value={newCat.enjoys} />
                </FormGroup>
            </Form>
            <Form>
                <FormGroup>
                    <Label for="name">Image</Label>
                    <Input type="text" name="image" onChange={handleChange} value={newCat.image} />
                </FormGroup>
                <div>
                    <Button
                      onClick={handleSubmit}color="primary"
                    >
                      Submit Cat
                    </Button>
                </div>
            </Form>
            
        </>
    )
}

export default CatNew