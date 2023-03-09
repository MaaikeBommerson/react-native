import { useState, useEffect } from 'react'

const App = () => {
    const [count, setCount] = useState(0)
    const [updateCount, setUpdate] = useState(false)

    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1)
      }, 1000)
    }, [updateCount])

    return(
      <div>
      <h1> I've rendered {count} times!</h1>
      <button onClick= {() => setUpdate(!updateCount)}>
        Update
      </button>
      </div>
    )
}

export default App