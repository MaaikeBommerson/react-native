import {useContext} from 'react'
import FavoritesContext from "../context/FavoritesContext"

const AddFavorite = (props) => {
    const fav = useContext(FavoritesContext)

    return(
        <div>
            <h1>Add Favorite</h1>
            <button onClick={() => fav.addFavorites("New favorite")}>
                Add favorite
            </button>
        </div>
    )
}
export default AddFavorite