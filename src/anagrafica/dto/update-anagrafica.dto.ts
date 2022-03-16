import { PartialType } from '@nestjs/mapped-types';
import { CreateAnagraficaDto } from './create-anagrafica.dto';

export class UpdateAnagraficaDto extends PartialType(CreateAnagraficaDto) {}
