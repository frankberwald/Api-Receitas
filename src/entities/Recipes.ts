import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { Ingredients } from "./Ingredients";

@Entity()
export class Recipes {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: "varchar", length: "255", nullable: false })
  name: string

  @Column({ type: "time", nullable: false })
  preparation_time: string

  @Column({ type: "boolean", default: false })
  is_fitness: boolean;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;

  @OneToMany(() => Ingredients, ingredient => ingredient.recipes)
  ingredients: Ingredients[]
}