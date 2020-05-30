import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe'
import Columns from 'react-columns'
import { Container } from 'react-bootstrap'

const App = () => {
  const APP_ID = "e3b07545"
  const APP_KEY = "3197d1ce92ea1a5b60e7b9eb84a719da"

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('rice')

  useEffect(() => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
    console.log(search)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search) 
    setSearch('')
  }

  var queries = [{
    columns: 2,
    query: 'min-width: 500px'
  }, {
    columns: 3,
    query: 'min-width: 1000px'
  }]

  return(
    
      <div className="App">
        <header className="title-bar">
          <h1 className="title">Recipe Finder</h1>
        </header>
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch} />
          <button className="search-button" type="submit">Search</button>
        </form>
        <Container>
        <Columns queries={queries}>
        {recipes.map(recipe => (
            <Recipe 
              key={recipe.recipe.label}
              title={recipe.recipe.label.length < 20 ? `${recipe.recipe.label}` : `${recipe.recipe.label.substring(0, 20)}...` }
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              url={recipe.recipe.url}
              source={recipe.recipe.source}
            />
          ))}
        </Columns>
        </Container>
      </div>
    
  )
}

export default App;