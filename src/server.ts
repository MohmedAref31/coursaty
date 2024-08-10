import "dotenv/config";
import { App } from "./app.js";

const port = process.env.PORT ? +process.env.PORT : 5000;
const app = new App(port);
app.listen()

