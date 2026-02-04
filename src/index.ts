import "dotenv/config";

import express from "express";
import http from "http";

import { router } from "./routes/lockRoutes";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(router);
app.set("port", PORT);

const server = http.createServer(app);
server.listen(PORT);
console.log(`Listening on port ${PORT}`);
