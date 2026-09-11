import { onRequest } from 'firebase-functions/v2/https'
import { createApp } from './app'
import { onUserCreate } from './triggers/onUserCreate'

const app = createApp()

export const api = onRequest(
  {
    region: 'australia-southeast1',
    maxInstances: 10,
    memory: '256MiB',
    timeoutSeconds: 60,
  },
  app
)

export { onUserCreate }
