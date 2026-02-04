import { LockModel } from "../generated/prisma/models";
import { prisma } from "../lib/prisma";

class LockStore {
  async getOrCreateLock(): Promise<LockModel> {
    return (
      (await prisma.lock.findFirst({ where: { id: 1 } })) ??
      (await prisma.lock.create({
        data: {
          id: 1,
          is_locked: false,
          is_triggered: false,
        },
      }))
    );
  }

  async upsertLock(data: Partial<LockModel>): Promise<LockModel> {
    return await prisma.lock.upsert({
      where: { id: 1 },
      create: {
        id: 1,
        is_locked: data.is_locked ?? false,
        is_triggered: data.is_triggered ?? false,
      },
      update: {
        is_locked: data.is_locked,
        is_triggered: data.is_triggered,
      },
    });
  }
}

export const lockStore = new LockStore();
