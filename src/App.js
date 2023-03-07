import './styles/App.css'

const App = () => {

  const hour = new Date().getHours()
  const color = hour === 14 ? "#F0F" : "#000"
  const style = { color: color}

  return(
    <div className="app-component">
      <h1 style={ style }>{ hour }</h1>
      <h2 style={{backgroundColor: color, padding: 20}}>
        BackgroundColor changed!
      </h2>
      </div>
  )
}

export default App;
