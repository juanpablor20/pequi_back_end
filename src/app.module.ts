import { Module } from '@nestjs/common';
import { EquipoController } from './equipo/equipo.controller';
import { EquipoService } from './equipo/equipo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { EquipoModule } from './equipo/equipo.module';

@Module({
  imports: [
    EquipoModule, TypeOrmModule.forRoot({
    "type": 'mysql',
      "host": 'localhost',
      "port": 3306,
      "username": 'root',
      "password": '',
      "database": 'prueba1',
      "entities": [join(__dirname, '**', '*.entity.{ts,js}')],
      "synchronize": true,
      
      
}),  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
