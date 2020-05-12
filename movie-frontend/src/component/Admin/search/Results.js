import React from 'react';
import Result from './Result'


function Results({ searchResult, openPopup }) {
    return (
        <section className = "searchResults">
            {searchResult.map(searchResults => (
                <Result searchResults = {searchResults} openPopup = {openPopup}/>
            ))}
        </section>
    );
}

export default Results;