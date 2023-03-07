const Profile = ({ person }) => {

    const name = `${ person.firstname } ${ person.lastname }`

    return(
        <div>
            <h2>Profile</h2>
            <h3>{ name }</h3>
        </div>
    )
}

export default Profile