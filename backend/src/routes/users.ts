// backend/src/routes/users.ts
import { Router, type Router as ExpressRouter } from 'express'
import { adminDb } from '../lib/firebase'
import { requireRole } from '../middleware/requireRole'
import { HttpError } from '../lib/errors'

const router: ExpressRouter = Router()

router.patch('/:uid/role', requireRole('Administrator'), async (req, res, next) => {
  try {
    const { uid } = req.params
    if (!uid || Array.isArray(uid)) {
      return next(HttpError.badRequest('Missing or invalid uid'))
    }

    const { role } = req.body as { role: 'Coordinator' | 'Administrator' }
    if (!['Coordinator', 'Administrator'].includes(role)) {
      return next(HttpError.badRequest('Invalid role'))
    }
    await adminDb.collection('users').doc(uid).update({ role, updatedAt: new Date() })
    res.json({ success: true })
  } catch (error) {
    next(error)
  }
})

export { router as usersRouter }
