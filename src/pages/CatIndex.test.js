import { render, screen } from "@testing-library/react"
import CatIndex from "./CatIndex"
import mockCats from "../mockCats"

describe("<CatIndex />", () => {
  it("renders without crashing", () => {})

  it("renders cat cards", () => {
    render(<CatIndex cats={mockCats} />)
    mockCats.forEach((value) => {
      const catName = screen.getByRole('heading', { name: /mittens/i })
      expect(catName).toBeInTheDocument()
    })
  })
  it("renders cat cards", () => {
    render(<CatIndex cats={mockCats} />, )
    mockCats.forEach((value) => {
      const catAge = screen.getByRole('heading', { name: /age: 5/i })
      expect(catAge).toBeInTheDocument()
    })
  })
})
