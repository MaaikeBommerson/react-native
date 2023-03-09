import {useState} from "react"
import FavoritesContext from './context/FavoritesContext'
import AddFavorite from './components/AddFavorite'
import ShowFavorites from './components/ShowFavorites'

const App = () => {
  const [favorites, setFavorites] = useState(["one", "two"])
  const addFavorites = (fav) => {
    setFavorites(favs => [...favs, fav])
  }

  return (
    <FavoritesContext.Provider value={{favorites, addFavorites}}>
      <h2>Favorites</h2>
      <ul>
        {
          favorites.map((item, index) => {
            return(
              <li key={index.toString()}>{item}</li>
            )
          })
        }
      </ul>
      <AddFavorite />
      <ShowFavorites />
    </FavoritesContext.Provider>
  )
}

export default App;