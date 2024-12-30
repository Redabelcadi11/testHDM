import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import UseCaseFactory from '../UseCase/UseCaseFactory';
import SaveTaskDto from '../UseCase/SaveTask/SaveTaskDto';

@Controller('tasks')
export class TaskController {
  private readonly saveTaskUseCase = UseCaseFactory.createSaveTaskUseCase();
  private readonly getAllTasksUseCase = UseCaseFactory.createGetAllTasksUseCase();
  private readonly deleteTaskUseCase = UseCaseFactory.createDeleteTaskUseCase();

  // ✅ Obtenir toutes les tâches
  @Get()
  async getAllTasks() {
    return this.getAllTasksUseCase.execute();
  }

  // ✅ Créer une nouvelle tâche
  @Post()
  async createTask(@Body() taskData: SaveTaskDto) {
    return this.saveTaskUseCase.createTask(taskData);
  }

  // ✅ Modifier une tâche
  @Put(':id')
  async updateTask(
    @Param('id', ParseIntPipe) id: number,
    @Body() taskData: Partial<SaveTaskDto>,
  ) {
    return this.saveTaskUseCase.updateTask(id, taskData);
  }

  // ✅ Supprimer une tâche
  @Delete(':id')
  async deleteTask(@Param('id', ParseIntPipe) id: number) {
    return this.deleteTaskUseCase.execute(id);
  }
}
