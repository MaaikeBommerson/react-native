import { useEffect, useState } from 'react'

const App = () => {
    const [data, setData] = useState([])
    const [isLoaded, setLoaded] = useState(false)

    const fetchData = () => new Promise((resolve, reject) => {
      fetch('https://api.dev-master.ninja/reactjs/slow/')
      .then(response => response.json())
      .then(result => {
        resolve(result)
      })
      .catch(err => reject(err))
    })

    useEffect(() => {
        const fetch = async() => {
          let result = await fetchData().catch(err => console.log(err))
          setData(result)
          setLoaded(true)
        }

        fetch()
      }, [])

    const renderContent = () => {
      return( isLoaded ? <h1>Loaded!</h1>
            : <h2>Loading...</h2>)
    }

    return(
      <div>
        {renderContent()}
      </div>
    )
}

export default App