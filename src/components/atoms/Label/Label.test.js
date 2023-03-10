import { render } from "@testing-library/react"
import Label from "./Label"

describe("Label", () => {

     it("will render", () => {
    
        const { getByTestId } = render(<Label label="test" color="muted" />)
        const label = getByTestId("label")
    
        expect(label).toBeInTheDocument()
     })
    
     it("has the correct value", () => {
    
        const { getByTestId } = render(<Label label="test" color="muted" />)
        const label = getByTestId("label")
    
        expect(label.innerHTML).toBe("test")
     })
    
     it("has the 'muted' color", () => {
    
        const { getByTestId } = render(<Label label="test" color="muted" />)
        const label = getByTestId("label")
    
        expect(label).toHaveStyle(`color: rgba(0,0,0,0.5)`)
     })

})