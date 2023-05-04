import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Header from "../components/Header"
import catPhoto from '../assets/catlogo.jpeg'


describe("<Header />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>,
            div
        )
    })

    it("renders a logo with a src and alt", () => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>,
            div
        )
    })

    it("has a clickable image link", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>,
        )
    })

    it("render a logo with a src and alt", () => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>,
            div
        )
        const logo = screen.getByRole("img")
        expect(logo).toHaveAttribute("src", "catlogo.jpeg")
        expect(logo).toHaveAttribute("alt", "The Cat's Meowchies logo")
        
    })

    it("has clickble links", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        userEvent.click(screen.getByText("Meet the Cats"))
        expect(screen.getByText("Meet the Cats")).toBeInTheDocument()
        userEvent.click(screen.getByText("Add a New Cat"))
        expect(screen.getByText("Add a New Cat")).toBeInTheDocument()

    })
})