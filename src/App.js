import { useEffect, useState } from 'react'

const App = () => {
    const [ email, setEmail ] = useState("")
    const [err, setErr] = useState(false)

    const validateEmail = (input) => {
      const validEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
      setErr(!input.match(validEmail))
      setEmail(input)
    }

    const renderError = () => {
      if(err) {
        return(
          <div>Not a valid email</div>
        )
      }
    }

    const submitData = () => {
      alert("API Call made!")
    }

    const renderSave = () => {
      if(!err && email !=="") {
        const data = {
          email: email
        }

      return(
        <button onClick={() => submitData(data)}>
          Save email
        </button>
        )
      }
    }

    return(
      <div>
        <label>Email</label>
        <input type='text' value={email}  
                onChange={(e) => validateEmail(e.target.value)} />
        {renderError()}
        {renderSave()}
      </div>
    )
}

export default App