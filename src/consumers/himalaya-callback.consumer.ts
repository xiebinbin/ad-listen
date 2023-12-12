import { Process, Processor } from "@nestjs/bull";
import { InjectModel } from "@nestjs/mongoose";
import { Job } from "bull";
import { Model, Schema } from "mongoose";
import { HimalayaClick } from "src/schemas/himalaya-click.schema";
import * as dayjs from 'dayjs';
@Processor('himalaya-callback')
export class HimalayaCallbackConsumer {
    constructor(
        @InjectModel(HimalayaClick.name) private himalayaClickModel: Model<HimalayaClick>,
    ) { }
    @Process()
    async handle(job: Job<{ id: Schema.Types.ObjectId }>) {
        const item = await this.himalayaClickModel.findById(job.data.id);
        const latestWhere: { [key: string]: any } = {
            _id: {
                $ne: job.data.id,
            },
            created_at: {
                $gte: dayjs().subtract(7, 'day').toDate(),
            },
            $or: []
        };
        if(item.os === 'android'){
    
            if(item.imei_md5){
                latestWhere.$or.push({
                    imei_md5: item.imei_md5,
                });
            }
            if(item.oaid){
                latestWhere.$or.push({
                    oaid: item.oaid,
                });
            }
            if(item.oaid_md5){
                latestWhere.$or.push({
                    oaid_md5: item.oaid_md5,
                });
            }
            if(item.android_id){
                latestWhere.$or.push({
                    android_id: item.android_id,
                });
            }
        }
        if(item.os === 'ios'){
            if(item?.idfa){
                latestWhere.$or.push({
                    idfa: item.idfa,
                });
            }
            if(item?.ua){
                latestWhere.$or.push({
                    ip: item.ip,
                    ua: item.ua,
                });
            }
            if(item?.caid){
                latestWhere.$or.push({
                    caid: item.caid,
                });
            }
            if(item?.caid2){
                latestWhere.$or.push({
                    caid2: item.caid2,
                });
            }
        }
        if(latestWhere.$or.length === 0){
            delete latestWhere.$or;
        }
        let type = 'active';
        const latestItem = await this.himalayaClickModel.findOne(latestWhere).sort({ _id: -1 });
        if(latestItem){
            type = 'leave';
        }
        // 通过urldecode 解码 item.callback_url
        const callbackUrl = decodeURIComponent(item.callback_url + '');
        console.log('callbackUrl', callbackUrl);
        // 替换解析url
        const url = new URL(callbackUrl);
        url.searchParams.set('type', type);
        console.log('url', url.toString());
        // 发起get请求
        const res = await fetch(url.toString());
        const text = await res.text();
        console.log('text', text);
    }
}