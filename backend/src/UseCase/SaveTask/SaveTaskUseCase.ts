import { Injectable } from '@nestjs/common';
import { TaskRepository } from '../../Repositories/TaskRepository';

interface TaskDto {
  id?: number;
  title: string;
  description?: string;
  completed?: boolean;
}

@Injectable()
export class SaveTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

// Creation réer une tâche
  async createTask(data: TaskDto) {
    return this.taskRepository.createTask({
      title: data.title,
      description: data.description,
      completed: data.completed || false,
    });
  }

//modification
  async updateTask(id: number, data: Partial<TaskDto>) {
    return this.taskRepository.updateTask(id, {
      title: data.title,
      description: data.description,
      completed: data.completed,
    });
  }
}
