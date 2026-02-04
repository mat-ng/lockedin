import { LockModel } from "../generated/prisma/models";
import { lockStore } from "../stores/lockStore";

class LockOperation {
  async getOrCreateLock(): Promise<LockModel> {
    return await lockStore.getOrCreateLock();
  }

  async lockLock(): Promise<LockModel> {
    return await lockStore.upsertLock({ is_locked: true });
  }

  async unlockLock(): Promise<LockModel> {
    return await lockStore.upsertLock({ is_locked: false });
  }

  async triggerLock(): Promise<LockModel> {
    return await lockStore.upsertLock({ is_triggered: true });
  }

  async untriggerLock(): Promise<LockModel> {
    return await lockStore.upsertLock({ is_triggered: false });
  }
}

export const lockOperation = new LockOperation();
