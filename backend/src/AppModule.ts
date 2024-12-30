import { Module } from '@nestjs/common';
import { TaskController } from './Controllers/TaskController';
import { PrismaService } from './PrismaService';
import { TaskRepository } from './Repositories/TaskRepository';
import { SaveTaskUseCase } from './UseCase/SaveTask/SaveTaskUseCase';

@Module({
  imports: [],
  controllers: [TaskController],
  providers: [PrismaService, TaskRepository, SaveTaskUseCase],
})
export class AppModule {}
