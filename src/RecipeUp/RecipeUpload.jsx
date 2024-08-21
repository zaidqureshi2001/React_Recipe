import React, { useState } from 'react'
import './RecipeUpload.css'
const RecipeUpload = ({onUpload}) => {
  const[title,setTitle]=useState()
  const[ingredients,setIngredients]=useState()
  const[instruction,setInstruction]=useState()
  function handleUpload(){
    const newRecipe={
      title,
      ingredients,
      instruction
    }
    onUpload(newRecipe);
    setTitle('');
    setInstruction('');
    setIngredients('');
    
  }
  return (
  <div className="upload_container">
    <h2>Upload Your Recipe</h2>
    <input type="text" placeholder='Recipe Title' className='recipe_title' onChange={(e)=>setTitle(e.target.value)}/>
    <textarea  placeholder='Recipe Ingredients' onChange={(e)=>setIngredients(e.target.value)} className='recipe_ingredients'></textarea>
    <textarea  placeholder='Recipe Instruction' onChange={(e)=>setInstruction(e.target.value)} className='recipe_instruction'></textarea>
    <button className='upload_button' onClick={()=>handleUpload()}>Upload Recipe</button>
  </div>
  )
}

export default RecipeUpload
