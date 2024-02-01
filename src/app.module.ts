import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

@Module({
  // Por ejemplo conectar a una base de datos
  imports: [TasksModule],
  //Rutas del modulo
  controllers: [],
  //Funciones para conectar con la base de datos
  providers: [],
})
export class AppModule {}
