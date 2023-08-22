import "reflect-metadata"
import express from 'express';
import { AppDataSource } from './data-source';

const app = express();

// app.listen(3000, () => console.log('Sever is running'))

AppDataSource.initialize().then(async () => {
    console.log('Database OK')
    app.listen(3000, () => console.log('Sever is running'))
})