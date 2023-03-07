import './styles/App.css'
import EmployeeList from './components/Employees'

const App = () => {

  const employees= [
    { id: 1, firstname: "John", lastname: "Doe", job: "Developer"},
    { id: 2, firstname: "Anna", lastname: "Tiger", job: "Developer"},
    { id: 3, firstname: "Jim", lastname: "Lion", job: "UX/UI"}
  ]

  return(
      <div>
        <h1>Employees</h1>
        <ul>
           <EmployeeList employees={ employees } /> 
        </ul>
      </div>
  )
}

export default App;
