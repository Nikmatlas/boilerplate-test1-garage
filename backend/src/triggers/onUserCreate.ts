// backend/src/triggers/onUserCreate.ts
import { beforeUserCreated } from 'firebase-functions/v2/identity'
import { adminDb } from '../lib/firebase'

export const onUserCreate: ReturnType<typeof beforeUserCreated> = beforeUserCreated(async (event) => {
  const user = event.data
  if (!user) return

  await adminDb.collection('users').doc(user.uid).set({
    uid: user.uid,
    name: user.displayName ?? '',
    email: user.email,
    role: 'Coordinator',
    createdAt: new Date(),
    updatedAt: new Date(),
    _schemaVersion: 1,
  })
})
