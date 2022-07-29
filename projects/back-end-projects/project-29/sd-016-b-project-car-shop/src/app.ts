import express from 'express';
import connectToDatabase from './connection';
import Routes from './routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    Routes(this.app);
  }

  public startServer(PORT: string | number = 3001): void {
    connectToDatabase();
    this.app.listen(
      PORT,
      () => console.log(`Server running here 👉 http://localhost:${PORT}`),
    );
  }

  public getApp() {
    return this.app;
  }
}

export default App;
