import { useState } from 'react'

const Interaction = () => {

    const [inputValue, setInputValue] = useState('')

    return(
        <div>
            <input data-testid="interaction-input" 
                   value={ inputValue } 
                   type="text" 
                   onChange={ (e) => setInputValue(e.target.value) } />

            <button data-testid="interaction-button"
                    onClick={ () => setInputValue("From Button")}>Save!</button>
            
            <div data-testid="interaction-output">{ inputValue }</div>
        </div>
    )

}

export default Interaction