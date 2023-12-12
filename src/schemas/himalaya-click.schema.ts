import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from 'mongoose';

export type HimalayaClickDocument = HydratedDocument<HimalayaClick>;
@Schema()
export class HimalayaClick {
    @Prop({
        required: true,
    })
    time: String;
    @Prop({
        required: true,
        default: '',
        index: true,
    })
    ip: String;
    @Prop({
        required: true,
        index: true,
        default: '',
    })
    os: String;
    @Prop({
        index: true,
        default: '',
    })
    imei_md5: String;
    @Prop({
        index: true,
        default: '',
    })
    oaid: String;
    @Prop({
        index: true,
        default: '',
    })
    oaid_md5: String;
    @Prop({
        index: true,
        default: '',
    })
    android_id: String;
    @Prop({
        index: true,
        default: '',
    })
    idfa: String;
    @Prop({
        index: true,
        default: '',
    })
    caid: String;
    @Prop({
        index: true,
        default: '',
    })
    caid2: String;
    @Prop({
        index: true,
    })
    task_id: String;
    @Prop({
        index: true,
    })
    plan_id: String;
    @Prop({
        index: true,
    })
    material_id: String;
    @Prop()
    ua?: String;
    @Prop()
    model?: String;
    @Prop()
    width?: String;
    @Prop()
    height?: String;
    @Prop()
    wh?: String;
    @Prop()
    task_name?: String;
    @Prop()
    plan_name?: String;
    @Prop()
    material_name?: String;
    @Prop()
    cid?: String;
    @Prop({
        default: false
    })
    callback_status: Boolean;
    @Prop({
        default: '',
    })
    callback_url?: String;
    @Prop({
        default: Date.now,
    })
    created_at: Date;
    @Prop({
        default: Date.now,
    })
    updated_at: Date;
}
export const HimalayaClickSchema = SchemaFactory.createForClass(HimalayaClick);