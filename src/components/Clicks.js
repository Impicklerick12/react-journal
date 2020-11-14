import React, { useState } from 'react'

const Example = () => {

    // const [clicks, setClicks] = useState(0)
    const [clicks, setClicks] = useLocalState('clicks')

    // const [clicks1, setClicks1] = useState(0)

    function useLocalState(localItem) {
        const [loc, setState] = useState(localStorage.getItem(localItem))

        function setLoc(newItem) {
            localStorage.setItem(localItem, newItem)
            setState(newItem)
        }

        return [loc, setLoc]
    }

    // Calling a function to perform the click counting
    function countClicks() {
        if (clicks == null ) {
            setClicks(0)
        } else {
            const newClicks = parseInt(clicks) + 1
            setClicks(newClicks) 
        }
    }

    // Function to reset clicks to 0
    function clearClicks() {
        setClicks(0)
    }

    return (
        <div>
            <p>You clicked {clicks} times</p>

            {/* Method for calling the function */}
            <button onClick={countClicks}>Click Me!</button>
            <button onClick={clearClicks}>Clear Clicks</button>

            {/* <p>You clicked {clicks1} times</p> */}
            {/* Method for counting clicks in the same line */}
            {/* <button onClick={((event) => setClicks1(clicks1 + 1))}>Click Me!</button> */}
        </div>
    )
}

export default Example