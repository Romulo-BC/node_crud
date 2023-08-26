import { Repository } from "typeorm";
import { Category } from "../entities/Category";
import { AppDataSource } from "../data-source";

export class DeleteCategoryService {
  async execute(id: string) {
    const repo: Repository<Category> = AppDataSource.getRepository(Category);

    if (!(await repo.findOne({ where: { id } }))) {
      return new Error("Category does not exists!");
    }

    await repo.delete(id);
  }
}
