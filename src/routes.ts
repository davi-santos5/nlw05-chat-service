import { Router } from "express";

import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";
import { MessagesController } from "./controllers/MessagesController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.get("/settings/:username", settingsController.findByUsername);
routes.get("/messages/:id", messagesController.showByUser);

routes.post("/settings", settingsController.create);
routes.post("/users", usersController.create);
routes.post("/messages", messagesController.create);

routes.put("/settings/:username", settingsController.update);

export { routes };
