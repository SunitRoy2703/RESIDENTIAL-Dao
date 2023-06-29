import { Redis } from '@upstash/redis';

export const databaseName =
  process.env.NODE_ENV === 'development' ? 'db-dev' : 'db'

const redis = Redis.fromEnv()

export default redis
