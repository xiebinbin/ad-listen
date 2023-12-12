import { Controller, Get, Query } from '@nestjs/common';
import { HimalayaClickService, ReportClickParams } from './services/himalaya-click.service';

@Controller('/api/himalaya-click')
export class HimalayaClickController {
    constructor(
        private readonly himalayaClickService: HimalayaClickService
    ) {}
    @Get('report')
    async report(@Query() data: ReportClickParams) {
        return await this.himalayaClickService.add(data);
    }
}
