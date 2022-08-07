import React, {useState, useEffect} from "react";
import RecipeList from "./RecipeList";
import { v4 as uuidv4 } from "uuid";
import SampleRecipes from "../SampleRecipes"
import "../css/app.css"

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = "cookingWithReact.recipes"

function App() {
  const [recipes, setRecipes] = useState(SampleRecipes)
  
  useEffect(()=>{
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
  }, [])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])

  const recipeContextValue = {
    handleAddRecipe,
    handleDeleteRecipe
  } 

  function handleAddRecipe(){
    const newRecipe = {
      id: uuidv4(),
      name: "New",
      servings: 1,
      cookTime: "1:00",
      instructions: "instructions",
      ingreadients: [
        {
          id: uuidv4(),
          name: "ingreadient",
          amount: "2 Tbsp"
        }
      ]
    }

    setRecipes([...SampleRecipes, newRecipe])
  }

  function handleDeleteRecipe(id){
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return(
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList 
      recipes={recipes}
      />
    </RecipeContext.Provider>
  )

}

export default App;
