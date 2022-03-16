import { Injectable } from '@nestjs/common';
import { CreateAnagraficaDto } from './dto/create-anagrafica.dto';
import { Anagrafica } from './entities/anagrafica.entity';
import { InjectModel } from '@nestjs/sequelize';
import { TipologiaAnagrafica } from './entities/tipologia-anagrafica.entity';
import { CreateTipologiaAnagraficaDto } from './dto/create-tipologia.dto';




@Injectable()
export class AnagraficaService {
  constructor(
    @InjectModel(Anagrafica)
    private anagraficaModel: typeof  Anagrafica,
    @InjectModel(TipologiaAnagrafica)
    private  tipologiaAnagraficaModel: typeof TipologiaAnagrafica,

  ){}

  async create(createAnagraficaDto: CreateAnagraficaDto): Promise<Anagrafica> {
    const createdCat = new this.anagraficaModel(createAnagraficaDto);
    return createdCat.save();
  }

  async createTipologia(createTipologiaDto: CreateTipologiaAnagraficaDto): Promise<TipologiaAnagrafica>{
    const createTipo = new this.tipologiaAnagraficaModel(createTipologiaDto);
    return createTipo.save();
  }

  async findAll(): Promise<Anagrafica[]>  {
    return this.anagraficaModel.findAll<Anagrafica>();
  }

  async getAnagraficaById(id): Promise<Anagrafica[]>  {
    return this.anagraficaModel.findAll<Anagrafica>({
      where: {
        id: id
      }
    });
  }

}
