import { FastifyReply, FastifyRequest } from "fastify";

import database from '@/database'

export async function getTools(request: FastifyRequest, reply: FastifyReply) {
  return database
}