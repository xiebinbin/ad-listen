import { Injectable } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";

@Injectable()
export class HimalayaCallbackCron {
    @Cron('10 * * * * *')
    handle(){
        console.log('himalaya callback cron');
    }
}