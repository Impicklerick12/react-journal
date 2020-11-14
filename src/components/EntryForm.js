import React, { useState } from 'react'
import { withRouter, Redirect } from 'react-router-dom'

// Make a new entry to a specific category
const EntryForm = ({history, category, addEntryToJournal}) => {

    const [entry, setEntry] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const [home, setHome] = useState(false)

    function onTextAreaChange(event) {
        setEntry(event.target.value)
        console.log(entry)
    }

    function handleSubmit (event) {
        event.preventDefault()
        // If we have an entry, call addEntryToJournal
        if (entry && entry.length > 0) {
            setErrorMessage(null)
            addEntryToJournal({category, entry})
            return setHome(true)

            // hacky way of redirecting
            // return history.push("/")
        }
        // If there is nothing in the textarea, show a message
        return setErrorMessage("Entry cannot be blank")
    }

    return (
        <div>
        {home && <Redirect to="/"/>}
            <form onSubmit={handleSubmit}>
                <div>
                    <textarea onChange={onTextAreaChange}></textarea>
                </div>
                <input type="submit" value="Create New Entry"/>
            </form>
        </div>
    )
}

export default withRouter(EntryForm)