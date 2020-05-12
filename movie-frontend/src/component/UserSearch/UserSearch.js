import React from 'react';

function UserSearch ({ handleInput, search }) {
    return (
        <section>
            <input
                 type = "text" 
                 placeholder = "Search for a movie..." 
                 className = "searchbox"
                 onChange = {handleInput}
                 onKeyPress = {search}
            />
        </section >
    )
}

export default UserSearch;