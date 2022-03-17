import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { AnagraficaService } from './anagrafica.service';
import { CreateAnagraficaDto } from './dto/create-anagrafica.dto';
import { CreateTipologiaAnagraficaDto } from './dto/create-tipologia.dto';
import { UpdateAnagraficaDto } from './dto/update-anagrafica.dto';
import { Anagrafica } from './entities/anagrafica.entity';
import { TipologiaAnagrafica } from './entities/tipologia-anagrafica.entity';
import { TipoAnagraficaService } from './tipo-anagrafica.service';

@Controller('anagrafica')
export class AnagraficaController {
  constructor(private readonly anagraficaService: AnagraficaService, private tipoAnagraficaService: TipoAnagraficaService) {}


  @Get('/getListaTipo')
  findAllTipi(): Promise<TipologiaAnagrafica[]>{
    return this.tipoAnagraficaService.findAll();
  }

  @Get('/listaAnagrafiche')
  findAllAnagrafiche(): Promise<Anagrafica[]>{
    return this.anagraficaService.findAll();
  }

  @Post('/createAnagrafica')
  createAnagrafica(@Body() createAnagraficaDto: CreateAnagraficaDto) {
    if(createAnagraficaDto){
       this.anagraficaService.create(createAnagraficaDto);
       return 'Anagrafica created successfully!'
    }
    else{
      return  'you must enter body values'
    }
   
  } 
  create(@Body('/createTipo') createTipologiaDto: CreateTipologiaAnagraficaDto){
     return this.anagraficaService.createTipologia(createTipologiaDto);
  }


  @Get('getById/:id')
  findOne(@Param('id') id: string) {
    return this.anagraficaService.getAnagraficaById(id);
  }

}
