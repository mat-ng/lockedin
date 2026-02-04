import { NextFunction, Request, Response } from "express";

import { lockOperation } from "../operations/lockOperation";

class LockController {
  async getOrCreateLock(_: Request, res: Response, next: NextFunction) {
    try {
      const lock = await lockOperation.getOrCreateLock();
      res.status(200).json(lock);
    } catch (error: any) {
      error.status = 500;
      error.message = "Internal Server Error";
      next(error);
    }
  }

  async lockLock(_: Request, res: Response, next: NextFunction) {
    try {
      const lock = await lockOperation.lockLock();
      res.status(200).json(lock);
    } catch (error: any) {
      error.status = 500;
      error.message = "Internal Server Error";
      next(error);
    }
  }

  async unlockLock(_: Request, res: Response, next: NextFunction) {
    try {
      const lock = await lockOperation.unlockLock();
      res.status(200).json(lock);
    } catch (error: any) {
      error.status = 500;
      error.message = "Internal Server Error";
      next(error);
    }
  }

  async triggerLock(_: Request, res: Response, next: NextFunction) {
    try {
      const lock = await lockOperation.triggerLock();
      res.status(200).json(lock);
    } catch (error: any) {
      error.status = 500;
      error.message = "Internal Server Error";
      next(error);
    }
  }

  async untriggerLock(_: Request, res: Response, next: NextFunction) {
    try {
      const lock = await lockOperation.untriggerLock();
      res.status(200).json(lock);
    } catch (error: any) {
      error.status = 500;
      error.message = "Internal Server Error";
      next(error);
    }
  }
}

export const lockController = new LockController();
