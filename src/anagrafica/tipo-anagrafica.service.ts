import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TipologiaAnagrafica } from './entities/tipologia-anagrafica.entity';

@Injectable()
export class TipoAnagraficaService {
  constructor(
    @InjectModel(TipologiaAnagrafica)
    private tipologiaAnagraficaModel: typeof TipologiaAnagrafica,
  ) {}

  async findAll(): Promise<TipologiaAnagrafica[]> {
    return this.tipologiaAnagraficaModel.findAll<TipologiaAnagrafica>();
  }
}
