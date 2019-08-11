import React from "react";

const ReposContainer = props => {
    const repo = props.repo || [];
    return (
        <div>
            <ul id="repos-list">
                    <li key={repo.id}>{repo.name}</li>
            </ul>
        </div>
    )};

export default ReposContainer;
