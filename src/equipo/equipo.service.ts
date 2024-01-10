import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EquipoEntity } from './entity/equipo.entity';  
import { equipoDto } from './entity/equipo.interface';

@Injectable()
export class EquipoService {

    constructor(
        @InjectRepository(EquipoEntity)
        private equipoRepository: Repository<EquipoEntity>,
    ) {}

    async AddEquipo(equipos: equipoDto): Promise<any>{
        let item = new EquipoEntity();
        item.numero_serie = equipos.numero_serie;
        item.estado = equipos.estado;
        const new_equipo =  await this.equipoRepository.save(item);
        return { new_equipo };
    }
    async editarequipo(id: string | number, equipo: EquipoEntity): Promise<EquipoEntity> {
        try {
            const searchOptions = typeof id === 'number' ? { where: { id: id } } : { where: { id: parseInt(id, 10) } };

            const toUpdate = await this.equipoRepository.findOne(searchOptions);

            if (!toUpdate) {
                throw new Error('Equipo no encontrado');
            }

            const updatedEquipo = Object.assign(toUpdate, equipo);

            const equipo_actualizado = await this.equipoRepository.save(updatedEquipo);

            return equipo_actualizado;
        } catch (error) {
            throw new Error(`Error al editar equipo: ${error.message}`);
        }
    }

    getAllEquipo(): Promise<EquipoEntity[]>{
        return this.equipoRepository.find();
    }

    getEquipobyID(id: any): Promise<EquipoEntity> {
        return this.equipoRepository.findOne(id);
    }

    async eliminarEquipo(id: number): Promise<void>{
        await this.equipoRepository.delete(id);
    }
}
