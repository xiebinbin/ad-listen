import { Injectable } from "@nestjs/common";
export interface ReportClickParams {
    time?: number;
        ip?: string;
        os?: string;
        imei_md5?: string;
        oaid?: string;
        oaid_md5?: string;
        android_id?: string;
        idfa?: string;
        caid?: string;
        caid2?: string;
        task_id?: number;
        plan_id?: number;
        material_id?: number;
        ua?: string;
        model?: string;
        width?: number;
        height?: number;
        wh?: string;
        task_name?: string;
        plan_name?: string;
        material_name?: string;
        cid?: string;
}
@Injectable()
export class HimalayaService {
    reportClick(params: ReportClickParams): boolean {
        return true;
    }
}