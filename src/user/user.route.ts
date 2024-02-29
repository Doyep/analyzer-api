import { FastifyInstance } from "fastify";
import { userController } from "./user.controller";

const url = '/user'
export async function userRoute(server: FastifyInstance) {
  server.get(url, userController.fetch)
  server.post(url, userController.create)
}
