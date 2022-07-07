import express from 'express';
import tagsRoutes from './src/routes/tagsRoutes';
import filterRoutes from './src/routes/filterRoutes';
import matchRoutes from './src/routes/matchRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }
  routes() {
    this.app.use('/tags', tagsRoutes);
    this.app.use('/filter', filterRoutes);
    this.app.use('/match', matchRoutes);
  }
}

export default new App().app;
