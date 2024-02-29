import 'dotenv/config'
import fastify, { FastifyListenOptions } from 'fastify'
import mongoose from 'mongoose'
import { userRoute } from './user/user.route'

if (!process.env.DB_URI) throw new Error('API_URI is not defined')
if (!process.env.FASTIFY_PORT) throw new Error('FASTIFY_PORT is not defined')
if (!process.env.CORS_ORIGINS) throw new Error('CORS_ORIGINS is not defined')

const server = fastify({ logger: true })
  .register(userRoute)

// graceful shutdown
const listeners = ['SIGINT', 'SIGTERM']
listeners.forEach((signal) => process.on(signal, async () => { await server.close(); process.exit(0) }))

mongoose.connect(process.env.DB_URI)
  .then(() => server.log.info('connected to database'))
  .catch(error => server.log.error(`database ${error.message}`))

server.listen({ port: +process.env.FASTIFY_PORT, host: '0.0.0.0' } as FastifyListenOptions)
  .catch((error: Error) => server.log.error(error.message))
