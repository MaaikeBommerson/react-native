import { useParams } from "react-router-dom"
import {useEffect} from "react"

const Path = () => {

    let { id, slug } = useParams()

    useEffect(() => {
        alert(`ID: ${id} SLUG: ${slug}`)
    }, [id])

    return(
        <div>
            <h1>{slug} : {id}</h1>
        </div>
    )
}

export default Path