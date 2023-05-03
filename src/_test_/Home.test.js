import { render } from "@testing-library/react"
import Home from "../pages/Home"

describe("<Home />", () => {
    it('renders the home page for the user', () => {
        const div = document.createElement("div")
        render(<Home />, div)
    })
})



