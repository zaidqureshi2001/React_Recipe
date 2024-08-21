import React from 'react'
import './Recipe.css'

const Recipe = ({recipes}) => {
    console.log(recipes.title,'last');
  return (
  <>
 <div className="recipe">
    <div>
      <h1>Recipe Title is</h1> 
      <p>{recipes.title}</p>
    <div className="recipe_ingred">
    <h1>Recipe Ingredients</h1>
    <p>{recipes.ingredients}</p>
    </div>
    <div className="recipe_instr">
      <h1>Recipe Instruction</h1>
    <p>{recipes.instruction}</p>
    </div>
    </div>
 </div>
 <hr />
  </>
  )
}

export default Recipe
