import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HimalayaClick, HimalayaClickSchema } from './schemas/himalaya-click.schema';
import { HimalayaClickController } from './himalaya-click.controller';
import { HimalayaClickService } from './services/himalaya-click.service';
import { ScheduleModule } from '@nestjs/schedule';
import { HimalayaCallbackCron } from './cron/himalaya-callback.cron';
import { BullModule } from '@nestjs/bull';
import { HimalayaCallbackConsumer } from './consumers/himalaya-callback.consumer';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/ad'),
    MongooseModule.forFeature([{
      name: HimalayaClick.name,
      schema: HimalayaClickSchema,
    }]),
    ScheduleModule.forRoot(),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue(
      {
        name: 'himalaya-callback',
      },
    ),
  ],
  controllers: [
    AppController,
    HimalayaClickController,
  ],
  providers: [
    AppService,
    HimalayaClickService,
    HimalayaCallbackCron,
    HimalayaCallbackConsumer,
  ],
})
export class AppModule { }