import { EquipoEntity } from './entity/equipo.entity';
import { equipoDto } from './entity/equipo.interface';
import { EquipoService } from './equipo.service';
import { Controller, Get, Post, Delete, Param, Put, Body,  } from '@nestjs/common';

@Controller('equipos')
export class EquipoController {
    constructor(private readonly equipoService: EquipoService){}

    @Get()
    async getEquipo(): Promise<EquipoEntity[]>{
        return await this.equipoService.getAllEquipo();
    }

    @Post()
    async addEquipo(@Body() equipo: equipoDto): Promise<EquipoEntity>{
        return await this.equipoService.AddEquipo(equipo);
    }
    @Put(':id')
    async editarequipo(@Param('id') id: number, @Body() equipo: EquipoEntity): Promise<EquipoEntity> {
        return await this.equipoService.editarequipo(id, equipo);
    }
    @Delete(':id')
    async deleteEquipo(@Param() params): Promise<void>{
        await this.equipoService.eliminarEquipo(params.id);
    }

}