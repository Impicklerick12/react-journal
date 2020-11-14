import React, { useState, useEffect } from 'react'
import EntryForm from './EntryForm'

const NewEntry = ({match, categories, addEntryToJournal}) => {

    const selectedCategory = match.params ? match.params.id : -1
    const category = categories[selectedCategory]
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        category ? setErrorMessage(null) : setErrorMessage("Invalid Category")
    }, [category]);

    return (
        <div>
            {category && <h1>New Entry for {category}</h1>}
            {errorMessage && <p>{errorMessage}</p>}
            {category && <EntryForm category={category} addEntryToJournal={addEntryToJournal} />}
        </div>
    )
}

export default NewEntry