import React, {useState, useEffect} from "react";
import RecipeList from "./RecipeList";
import RecipeEdit from "./RecipeEdit";
import { v4 as uuidv4 } from "uuid";
import SampleRecipes from "../SampleRecipes"
import "../css/app.css"

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = "cookingWithReact.recipes"

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState()
  const [recipes, setRecipes] = useState(SampleRecipes)
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)

  useEffect(()=>{
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
  }, [])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes]) 

  const recipeContextValue = {
    handleAddRecipe,
    handleDeleteRecipe,
    handleSelectRecipe,
    handleRecipeChange,
    handleRecipeSelect
  } 

  function handleRecipeSelect(id){
    setSelectedRecipeId(id)
  }

  function handleRecipeChange(id, recipe){
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }

  function handleSelectRecipe(id){
    setSelectedRecipeId(id)
  }

  function handleAddRecipe(){
    const newRecipe = {
      id: uuidv4(),
      name: "New Recipe",
      servings: 1,
      cookTime: "--",
      instructions: "--",
      ingreadients: [
        {
          id: uuidv4(),
          name: "",
          amount: ""
        }
      ]
    }

    setSelectedRecipeId(newRecipe.id)
    setRecipes([...SampleRecipes, newRecipe])
  }

  function handleDeleteRecipe(id){
    if(selectedRecipeId !== null && selectedRecipeId === id){
      setSelectedRecipeId(undefined)
    }
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return(
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList 
      recipes={recipes}
      />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe}/>}
    </RecipeContext.Provider>
  )

}

export default App;
