import Profile from './components/Profile.js'

const App = () => {

  const person = {
      id: 1, 
      firstname: "John",
      lastname: "Doe",
      job: "Developer",
      projects: [
        { id: 1, name: "React Frontend Development" },
        { id: 2, name: "UX / UI Design" },
        { id: 1, name: "HR Program" },
      ]
    }

    return(
      <div>
        <Profile person={ person } />  
      </div>
    )
}

export default App