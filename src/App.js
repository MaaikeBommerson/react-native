import { useState } from 'react'

const App = () => {
    const person = {
      id: 1,
      firstname: "John",
      lastname: "Doe",
      job: "Developer"
    }

    const [employee, setEmployee] = useState(person)

    const updateEmployee = ({firstname}) => {
      setEmployee(prev => ({... prev, firstname}) )
      console.log(employee)
    }

    return(
       <>
       <h1>{`${employee.firstname} ${employee.lastname}`}</h1>
       <button 
       type="button"
       onClick={() => updateEmployee({firstname: "Bob"})}>
        Set firstname to Bob!
       </button>
       </>
    )
}

export default App