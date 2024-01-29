import "./UserList.css"

function UserList(user) {
    return <div>
        <div className="row">
            <div><img className="user-list-image" src={user.image}></img>
            </div>
            <div>
                <div>{user.name}</div>
                <div>{user.description}</div>
            </div>
            <div>{user.date}</div>
        </div>
    </div>
}
export default UserList;
