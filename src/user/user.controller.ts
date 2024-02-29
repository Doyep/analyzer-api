import { FastifyReply, FastifyRequest } from 'fastify'
import User from './user.model'

export const userController = {
  fetch: async (request: FastifyRequest, reply: FastifyReply) => {},
  create: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const user = {
        id: '1',
        whitelist: true
      }
      const newUser = await User.create(user)
      reply.code(201).send(newUser)
    } catch (error) {
      reply.code(500).send(error)
    }
  }
}
