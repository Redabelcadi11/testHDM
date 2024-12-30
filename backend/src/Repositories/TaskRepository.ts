import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../PrismaService';

interface Task {
  id?: number;
  title: string;
  description?: string;
  completed?: boolean;
}

@Injectable()
export class TaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  // Ce ci est pour créer une nouvelle tâche
  async createTask(data: Task) {
    return this.prisma.task.create({
      data,
    });
  }

  // modification tâche existante
  async updateTask(id: number, data: Partial<Task>) {
    const existingTask = await this.prisma.task.findUnique({ where: { id } });
    if (!existingTask) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return this.prisma.task.update({
      where: { id },
      data,
    });
  }

  // obtenir toutes les tâches
  async getAllTasks() {
    return this.prisma.task.findMany();
  }

  // supprimer task
  async deleteTask(id: number) {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
