import express, { Application } from "express"

// Routes
import indexRoutes from "./routes/index.routes";
import roomRoutes from "./routes/room.routes";
import recommendationRoutes from "./routes/recommendation.routes";
import contactMessageRoutes from "./routes/contact.routes"
import reservationsRoutes from "./routes/reserve.routes"
// Cors
import cors from "cors";

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
    this.app.use(cors())
  }

  routes() {
    this.app.use(indexRoutes);
    this.app.use('/api', roomRoutes);
    this.app.use('/api', recommendationRoutes);
    this.app.use('/api', contactMessageRoutes);
    this.app.use('/api', reservationsRoutes);
  }

  listen() {
    this.app.listen(this.app.get('port'));
    console.log(`App listening on ${this.app.get('port')}`);
  }
}