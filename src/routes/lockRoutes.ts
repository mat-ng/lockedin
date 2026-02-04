import express from "express";

import { lockController } from "../controllers/lockController";

const router = express.Router();

router.get("/lock", lockController.getOrCreateLock);
router.post("/lock", lockController.lockLock);
router.post("/unlock", lockController.unlockLock);
router.post("/trigger", lockController.triggerLock);
router.post("/untrigger", lockController.untriggerLock);

export { router };
