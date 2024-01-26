function UserProfile() {
    return <div className="parent-div">
        <div>
            <img className="user-image" src='https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        </div>
        <div className='faint-color'>
            Max Size: 1 Gb
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


// UserProfile();
{/* <div></div> */ }