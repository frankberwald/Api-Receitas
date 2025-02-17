import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Recipes } from "../entities/Recipes"

export class RecipeController {

    private recipesRepository = AppDataSource.getRepository(Recipes)
    constructor() {
        this.recipesRepository = AppDataSource.getRepository(Recipes)
    }


}