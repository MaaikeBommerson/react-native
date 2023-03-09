import { useState, useReducer} from 'react'

const reducer = (state, action) => {
  switch(action.type) {
    case "increment": {
        return({ count: state.count + action.payload.increment})
    }
    case "decrement": {
      return({ count: state.count - action.payload.decrement})
    }
    default: return(state)
  }
}

const App = () => {
  const initialState = {count: 0}
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
   <div>
      <h3>state: {state.count}</h3>
      <code style={{margin: 40}}>
        {JSON.stringify(state)}
      </code>
      <div style={{padding:40}}>
          <button onClick={() => dispatch({type: "increment", payload: {increment: 100}})}>Plus</button>
          <button onClick={() => dispatch({type: "decrement", payload: {decrement: 50}})}>Min</button>

      </div>
   </div>
  )
}

export default App;