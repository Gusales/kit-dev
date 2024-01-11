import { FastifyInstance } from "fastify";
import { getTools } from "../controllers/tools.controller";

export async function toolsRoute(app: FastifyInstance) {
  app.get('/tools', getTools)
}