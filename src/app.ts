import express, { Application } from "express"

// Routes
import indexRoutes from "./routes/index.routes";

export class App {

  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  settings() {
    this.app.set('port', this.port || process.env.PORT || 3000);
  }

  middlewares() {
    this.app.use(express.json());
  }

  routes() {
    this.app.use(indexRoutes);
  }

  listen() {
    this.app.listen(this.app.get('port'));
    console.log(`App listening on ${this.app.get('port')}`);
  }
}