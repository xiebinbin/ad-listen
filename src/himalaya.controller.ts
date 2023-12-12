import { Controller, Get, Query } from '@nestjs/common';
import { HimalayaService, ReportClickParams } from './services/himalaya.service';

@Controller('/api/himalaya')
export class AppController {
    constructor(
        private readonly himalayaService: HimalayaService
    ) {}
    @Get('report-click')
    reportClick(@Query() query: ReportClickParams): boolean {
        return this.himalayaService.reportClick(query);
    }
}
