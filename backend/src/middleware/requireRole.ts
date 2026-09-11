// backend/src/middleware/requireRole.ts
import type { Request, Response, NextFunction } from 'express'
import { adminDb } from '../lib/firebase'
import { HttpError } from '../lib/errors'
import type { AuthenticatedRequest } from './auth'

export function requireRole(...allowedRoles: Array<'Coordinator' | 'Administrator'>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req as AuthenticatedRequest
    const userDoc = await adminDb.collection('users').doc(user.uid).get()
    const role = userDoc.data()?.role
    if (!role || !allowedRoles.includes(role)) {
      return next(HttpError.forbidden('Insufficient permissions'))
    }
    next()
  }
}
