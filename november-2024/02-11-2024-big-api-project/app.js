import express from "express";
import dotenvFlow from "dotenv-flow";
import morgan from "morgan";
import usersRoute from "./routes/user-route.js";
import projectsRoute from "./routes/project-route.js";
import tasksRoute from "./routes/task-route.js";
import { logRequest } from "./middleware/logger.js";
import { errorHandle } from "./middleware/error-handling.js";
import { connectDB } from "./config/mongo-db-connection.js";
import { handleUndefinedRoutes } from "./middleware/handle-undefined-routes.js";

dotenvFlow.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(logRequest);
app.use(express.json());
app.use(morgan("tiny"));

app.use("/api/users", usersRoute);
app.use("/api/projects", projectsRoute);
app.use("/api/tasks", tasksRoute);
app.use("*", handleUndefinedRoutes);

app.use(errorHandle);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Simple Project Management API.");
});

app.listen(`${PORT}`, () => {
  console.log(`Server is running on port ${PORT}`);
});
