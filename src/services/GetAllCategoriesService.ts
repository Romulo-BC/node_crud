import { Repository } from "typeorm";
import { Category } from "../entities/Category";
import { AppDataSource } from "../data-source";

export class GetAllCategoriesServices {
  async execute() {
    const repo: Repository<Category> = AppDataSource.getRepository(Category);

    const categories = await repo.find();

    return categories;
  }
}
