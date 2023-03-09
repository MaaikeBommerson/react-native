import useFetch from './hooks/useFetch'

const  App = () => {

    const [data, isLoaded] = useFetch("https://api.dev-master.ninja/reactjs/slow/");

    const renderContent = () => {
        return( isLoaded ? <h1>Loaded!</h1>
            : <h2>Loading...</h2> )
    }
    return(
        <div>
            { renderContent() }
        </div>
    )
}

export default App

