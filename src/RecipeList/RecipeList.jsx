import React from 'react'
import Recipe from '../Recepie/Recipe'
import './RecipeList.css'
const RecipeList = ({recipes}) => {
  return (
    <div className='recipe_list'>
 {recipes.map((recipes)=>{
    console.log(recipes,'list');
  return <Recipe  recipes={recipes}/>
 })}

    </div>
  )
}

export default RecipeList
