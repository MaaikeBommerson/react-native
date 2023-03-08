import { useState } from 'react'

const Profile = ({ person }) => {

    const [showProjects, setShowProjects] = useState(false)
    const name = `${ person.firstname } ${ person.lastname }`

    const toggleProjects = () => {
        setShowProjects(!showProjects)
    }

    const renderProjects = () => {
        if(showProjects) {
            return(
                <ul> {
                    person.projects.map((item, index) => {
                        return(
                            <li key={ index.toString()}> {item.name}</li>
                        )
                    })
                    }
                </ul>
            )
        }
    }

    return(
        <div>
            <h2>Profile</h2>
            <h3>{ name }</h3>
            <h4>{ person.job }</h4>

            <button onClick={() => toggleProjects()}>Show Projects</button>
            {
                renderProjects()
            }
        </div>
    )
}

export default Profile