import './styles/App.css'
import Profile from './components/Profile.js'

const App = () => {

  const person = {
        id: 1,
        firstname: "John",
        lastname: "Doe",
        job: "Developer"
  }

  return(
      <div>
        <Profile person={ person } />
      </div>
  )
}

export default App;
