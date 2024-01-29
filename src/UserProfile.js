function UserProfile(props) {
    console.log("My Prps", props)
    return <div className="parent-div">
        <div>
            <img className="user-image" src={props.userImageUrl}></img>
        </div>
        <div className='faint-color'>
            Max Size: {props.size}
        </div>
        <div>
            <b>Upload your new profile image</b>
        </div>
        <div className='button-row'>
            <div>
                <button className='take-picture-button'>Take Picture</button>
            </div>
            <div>
                <button>Upload File</button>
            </div>
        </div>
        <div>
            You can change your profile picture
        </div>
    </div>
}
export default UserProfile;