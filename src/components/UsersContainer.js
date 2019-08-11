import React from "react";
import UserCard from "./UserCard";

const UsersContainer = props => {
    const fetchedUsers = props.users || []
    return (
        <div>
            <ul id="user-list">
                {fetchedUsers.map(user => <UserCard key={user.id} user={user}/>)}
            </ul>
        </div>
    )
};

export default UsersContainer;
