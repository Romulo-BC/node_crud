import { Repository } from "typeorm";
import { Category } from "../entities/Category";
import { AppDataSource } from "../data-source";

type CategoryRequest = {
  name: string;
  description: string;
};

export class CreateCategoryService {
  async execute({ name, description }: CategoryRequest): Promise<Category> {
    // Obtendo o repositório da entidade Category usando AppDataSource
    const repo: Repository<Category> = AppDataSource.getRepository(Category);

    // Verificando se já existe uma categoria com o mesmo nome - SELECT * FROM WHERE NAME = "NAME LIMIT 1"
    if (await repo.findOne({ where: { name } })) {
      throw new Error("Category already exists");
    }

    // Criando uma nova instância da entidade Category
    const category = repo.create({
      name,
      description,
    });

    // Salvando a nova categoria no banco de dados
    await repo.save(category);

    // Retornando a categoria criada
    return category;
  }
}
