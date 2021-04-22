import express from "express";

import "./database";
import { routes } from "./routes";

const port = 3335;
const app = express();

app.use(express.json());

app.use(routes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
