import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from 'mongoose';

export type HimalayaClickDocument = HydratedDocument<HimalayaClick>;
@Schema()
export class HimalayaClick {
    @Prop({
        required: true,
    })
    time: Number;
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
    caid2: string;
    @Prop({
        index: true,
    })
    task_id: Number;
    @Prop({
        index: true,
    })
    plan_id: Number;
    @Prop({
        index: true,
    })
    material_id: Number;
    @Prop()
    ua?: String;
    @Prop()
    model?: String;
    @Prop()
    width?: Number;
    @Prop()
    height?: Number;
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
        default: 'https%3A%2F%2Fad.ximalaya.com%2Fad-action%3Fuid%3D348015%26timestamp%3D1583379831565%26ip%3D223.114125.57%260s%3Dandroid%26imei_md5%3D70de186af7950d9a68a48127de9b6e94%26androidid%3Da14119bfd316c37a%26materialid%3D607521%26idfa%3D_IDFA_%26type%3Dact%26invokeid%3D33713',
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