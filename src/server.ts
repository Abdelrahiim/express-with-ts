import express from "express";
import dotenv from "dotenv";
import { AppRouter } from "./app.router";
import helmet from "helmet";
import morgan from "morgan";
import { ErrorHandleMiddleWare } from "./Middlewares";
// import "./Controllers";

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(helmet());
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(AppRouter.getInstance());

// ----------------------------------------------------------
// Error Handle Middler Ware
// must be the Last One
app.use(ErrorHandleMiddleWare);

// console.log(listEndpoints(app));

app.listen(PORT, () => {
  console.log(`🚀 Server Running At http://localhost:${PORT}`);
});
