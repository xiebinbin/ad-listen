import { InjectQueue } from "@nestjs/bull";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Queue } from "bull";
import { Model } from "mongoose";
import { HimalayaClick } from "src/schemas/himalaya-click.schema";

export interface ReportClickParams {
    time?: number;
        ip?: string;
        os: 'android' | 'ios';
        imei_md5?: string;
        oaid?: string;
        oaid_md5?: string;
        android_id?: string;
        callback_url?: string;
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
export class HimalayaClickService {
    constructor(
        @InjectModel(HimalayaClick.name) private himalayaClickModel: Model<HimalayaClick>,
        @InjectQueue('himalaya-callback') private himalayaCallbackQueue: Queue,
    ) {}
    async add(data: ReportClickParams) {
        const himalayaClick = new this.himalayaClickModel(data);
        await himalayaClick.save();
        await this.himalayaCallbackQueue.add({
            id: himalayaClick._id,
        },{
            delay: 2000,
        });
        return true;
    }
}