import React from 'react';
import UserResult from './UserResult'


function UserResults({ searchResult, openPopup }) {
    return (
        <section className = "searchResults">
            {searchResult.map(searchResults => (
                <UserResult searchResults = {searchResults} openPopup = {openPopup}/>
            ))}
        </section>
    );
}

export default UserResults;