import { Controller, Get, Query } from '@nestjs/common';

import { EngRusEntity } from './eng-rus.model';
import { EngRusService } from './eng-rus.service';

@Controller('translation')
export class EngRusController {
  constructor(private readonly service: EngRusService) {}

  @Get()
  public async getTranslation(@Query('id') id: any): Promise<EngRusEntity[]> {
    return this.service.findTranslations(id);
  }
}
