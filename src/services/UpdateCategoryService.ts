import { Repository } from "typeorm";
import { Category } from "../entities/Category";
import { AppDataSource } from "../data-source";

type CategoryUpdateRequest = {
  id: string;
  name: string;
  description: string;
};

export class UpdateCategoryService {
  async execute({
    id,
    name,
    description,
  }: CategoryUpdateRequest): Promise<Category> {
    const repo: Repository<Category> = AppDataSource.getRepository(Category);

    const category = await repo.findOne({ where: { id } });

    if (!category) {
      throw new Error("Category already exists");
    }

    category.name = name ? name : category.name;
    category.description = description ? description : category.description;

    await repo.save(category);

    return category;
  }
}
