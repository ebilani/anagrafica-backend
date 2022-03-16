import { Module } from '@nestjs/common';
import { AnagraficaService } from './anagrafica.service';
import { AnagraficaController } from './anagrafica.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Anagrafica } from './entities/anagrafica.entity';
import { TipologiaAnagrafica } from './entities/tipologia-anagrafica.entity';
import { TipoAnagraficaService } from './tipo-anagrafica.service';

@Module({
  imports: [SequelizeModule.forFeature([Anagrafica, TipologiaAnagrafica])],
  controllers: [AnagraficaController],
  providers: [AnagraficaService,TipoAnagraficaService]
})
export class AnagraficaModule {}
