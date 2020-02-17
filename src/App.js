import React, { Component, useEffect, useState } from 'react'


import Recipe from './components/Receipe';
import Header from './components/Header';
import Footer from './components/Footer';

const App=()=>{

  const APP_ID = 'a3532b2b';
  const APP_KEY = '7377220aab571944c71596443f0b042b	';

  
  const [receipes, setReceipes] = useState([]);
  const [search, setSearch] = useState('chicken')
  const [query, setQuery] = useState('') 
  

  useEffect(()=>{
    getRecipes();
    
  },[query])


  const getRecipes = async () =>{
     const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
     const data =await response.json();
     setReceipes(data.hits)
     console.log(data.hits);
     
     
  }

  const onSubmit =(e)=>{
    e.preventDefault()
    setQuery(search)
  }


  const updateSearch=(e)=>{
    setSearch(e.target.value)
  }

  return(
    <div className="container">
      <Header/>
      <div className="row">
      
      <form onSubmit={onSubmit}>
        <input type="text" id="" name="" value={search} onChange={updateSearch}/>
        <button type="submit" value="Submit">Submit</button>
        
      </form>
      </div>
      <div className="row">
      

      {receipes.map((receipe,id) =>(
        <Recipe 
        title={receipe.recipe.label} 
        image={receipe.recipe.image} 
        calories={receipe.recipe.calories}
        ingredients={receipe.recipe.ingredients}
        digest={receipe.recipe.digest}
        />
      ))}
      </div>
      <Footer/>
    </div>
  )
}

export default App
