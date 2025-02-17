import { RecipeController } from "../controllers/RecipeController";
import { Router } from "express";

const recipeRouter = Router()

const recipeController = new RecipeController()

recipeRouter.post("/", recipeController.createRecipe)

recipeRouter.get("/", recipeController.getAll)

export default recipeRouter