import React, { useState } from 'react'

import Home from './components/Home'
import CategorySelection from './components/CategorySelection'
import NewEntry from './components/NewEntry'
import NotFound from './components/NotFound'
import Example from './components/Clicks'

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
// BrowserRouter : renders corresponding route and matched to the url
// Route : renders corresponding component based on the url matched

import { Blog } from './components/blog/exports'

const App = () => {

  const defaultCategories = ["Web Dev", "Code", "Other"]
  const [categories, setCategories] = useState(defaultCategories)
  const [entries, setEntries] = useState([]) // entries : array of objects we are storing

  function addEntryToJournal(newEntry) {
    // When you are updating an array or object as a state value, always take a deep copy and then update the copy
    const updatedEntries = [...entries, newEntry]
    setEntries(updatedEntries)
  }

  return (
    <div >
          <h1>Journal</h1>
          <BrowserRouter>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/clicks">Clicks</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              {/* <li><Link to="/category">Category</Link></li>
              <li><Link to="/entry/new">New Entry</Link></li> */}
            </ul>
            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} entries={entries}/>}/>
              <Route path="/category" render={(props) => <CategorySelection {...props} categories={categories} />}/>
              <Route path="/entry/new/:id" render={(props) => <NewEntry {...props} categories={categories} addEntryToJournal={addEntryToJournal}/>} />
              <Route path="/clicks"><Example /></Route>
              <Route path="/blog"><Blog /></Route>
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
    </div>
  )
}

export default App
