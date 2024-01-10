import { EquipoService } from './equipo.service';
import { Module } from '@nestjs/common';
import { EquipoController } from './equipo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipoEntity } from './entity/equipo.entity';

@Module({
    imports:[TypeOrmModule.forFeature([EquipoEntity])],
    controllers: [EquipoController],
    providers: [EquipoService],
})
export class EquipoModule {
    
}
