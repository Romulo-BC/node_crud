import { Request, Response } from "express";
import { GetAllCategoriesServices } from "../services/GetAllCategoriesService";

export class GetAllCategoryController {
  async handle(req: Request, res: Response) {
    const { name, description } = req.body;

    const service = new GetAllCategoriesServices();

    const result = await service.execute();

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
}
