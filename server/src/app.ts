import fastify from "fastify";
import { toolsRoute } from "./http/routes/tools.routes";

export const app = fastify()

app.register(toolsRoute)