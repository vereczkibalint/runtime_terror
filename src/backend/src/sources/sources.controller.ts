import { Controller } from '@nestjs/common';
import { SourcesService } from "./sources.service";

@Controller('sources')
export class SourcesController {
  constructor(private sourceService: SourcesService) {}
}
