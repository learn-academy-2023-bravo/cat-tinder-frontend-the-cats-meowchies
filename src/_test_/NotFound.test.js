import { render } from "@testing-library/react"
import NotFound from "../pages/NotFound"

describe("<NotFound />", () => {
    it('renders the NotFound page for the user', () => {
        const div = document.createElement("div")
        render(<NotFound />, div)
    })
})