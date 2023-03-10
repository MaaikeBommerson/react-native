import { render, fireEvent } from "@testing-library/react"
import Interaction from "./Interaction"

describe("Interaction", () => {

    it("will change the value on input", () => {

            const inputData = "test data"

            const { getByTestId, queryByTestId  } = render(<Interaction />)
            const input = getByTestId("interaction-input")
            const output = getByTestId("interaction-output")
            fireEvent.change(input, { target: { value: inputData }} )
            expect(output.innerHTML).toBe(inputData)

    })

    it("will change the value on button press", () => {
        const { getByTestId } = render(<Interaction />)
        const button = getByTestId("interaction-button")
        const output = getByTestId("interaction-output")
        fireEvent.click(button)
        expect(output.innerHTML).toBe("From Button")
    })
})