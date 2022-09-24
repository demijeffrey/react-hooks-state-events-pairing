import React from 'react'

function SearchBar({ formSubmit, formInput }) {

    return (
        <form onSubmit={formSubmit}>
            <label>
                Search Comments by Username:
                <br />
                <input type="text" name="text" onChange={formInput} />
                <input type="submit" value="Search" />
            </label>
        </form>
    )
}

export default SearchBar