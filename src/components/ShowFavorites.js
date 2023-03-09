import {useContext} from 'react'
import FavoritesContext from '../context/FavoritesContext'

const ShowFavorites = (props) => {
    const fav = useContext(FavoritesContext)

    return(
        <div>
            <h2>From ShowFavorites</h2>
            <ul>
                {
                    fav.favorites.map((item, index) => {
                        return(
                            <li key={index.toString()}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ShowFavorites