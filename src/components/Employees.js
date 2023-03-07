
const EmployeeList = ({ employees }) => {

    return(
    <div>
        {
        employees.map((person, index) =>{
        const name = `${ person.firstname } ${ person.lastname }`

        return(
            <li key={ index.toString() }>{ name }</li>
        )
        })
    }
    </div>
    )
}

export default EmployeeList