import "reflect-metadata";
import express from "express";
import { AppDataSource, CreateConnection } from "./data-source";
import { routes } from "./routes";

const app = express();

CreateConnection;

app.use(express.json());

app.use(routes);

async function startServer() {
  try {
    // Inicialize a conexão com o banco de dados
    await AppDataSource.initialize();
    
    console.log("Database OK");
    
    // Inicie o servidor após a inicialização do banco de dados
    app.listen(3000, () => console.log("Server is running"));
  } catch (error) {
    console.error("Error during server startup:", error);
  }
}

startServer();
