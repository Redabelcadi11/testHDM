import { SaveTaskUseCase } from './SaveTask/SaveTaskUseCase';
import { TaskRepository } from '../Repositories/TaskRepository';
import { PrismaService } from '../PrismaService';

export class UseCaseFactory {
  static createSaveTaskUseCase(): SaveTaskUseCase {
    const prismaService = new PrismaService();
    const taskRepository = new TaskRepository(prismaService);
    return new SaveTaskUseCase(taskRepository);
  }
}
