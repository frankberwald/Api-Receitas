import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Recipes } from "../entities/Recipes"
import { Ingredients } from "../entities/Ingredients"

export class RecipeController {

    private recipesRepository = AppDataSource.getRepository(Recipes)
    private recipesIngredients = AppDataSource.getRepository(Ingredients)
    constructor() {
        this.recipesRepository = AppDataSource.getRepository(Recipes)
    }

    createRecipe = async (req: Request, res: Response) => {
        const queryRunner = AppDataSource.createQueryRunner();
        try {
            const recipeBody = req.body;

            await queryRunner.connect()
            await queryRunner.startTransaction()

            const recipe = new Recipes()
            recipe.name = recipeBody.name;
            recipe.is_fitness = recipeBody.is_fitness;
            recipe.preparation_time = recipeBody.preparation_time
            await queryRunner.manager.save(recipe)

            await queryRunner.commitTransaction()
            res.status(201).json({ message: "Receita cadastrada com sucesso!" });
        } catch (ex) {
            await queryRunner.rollbackTransaction();
            res.status(500).json({ message: "Erro ao cadastrar receita", error: ex });
        } finally {
            await queryRunner.release()
        }
    }

    getAll = async (req: Request, res: Response) => {
        try {
            const recipes = await this.recipesRepository.find({ relations: ["ingredients"] })
            res.json(recipes)
        } catch (ex) {
            res.status(500).json({ message: "Erro interno do servidor" })
        }

    }
}