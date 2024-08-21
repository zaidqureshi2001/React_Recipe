import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import RecipeList from '../RecipeList/RecipeList'
import RecipeUpload from '../RecipeUp/RecipeUpload'
import './Parent.css' 

const Parent = () => {
  const[recipes,setRecipe]=useState([]);
  const[searchQuery,setSearchQuery]=useState('');
  const[filtersrch,setFiltersrch]=useState([]);
  useEffect(()=>{
    const lowercasequrey=searchQuery.toLowerCase();
    const filtered=recipes.filter((recipes)=>{
      return(
        recipes.title.toLowerCase().includes(lowercasequrey) ||
        recipes.ingredients.toLowerCase().includes(lowercasequrey) ||
        recipes.instruction.toLowerCase().includes(lowercasequrey) 
    )
    })
    setFiltersrch(filtered)
  },[recipes,searchQuery])
  const handleNewrecipe=(newRecipes)=>{
    setRecipe([...recipes,newRecipes])
  }
  return (
  <div className="parent_container">
    <div className="inputbox">
      <input type="text" name="" id="inptext" placeholder='Search Box' onChange={(e)=>setSearchQuery(e.target.value)}/>
    </div>
 
    <RecipeUpload onUpload={handleNewrecipe}/>
    <RecipeList recipes={searchQuery?filtersrch:recipes}/>
  </div>
  )
}

export default Parent
