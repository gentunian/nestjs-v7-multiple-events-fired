import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModuleA } from './module-a/a.module';

@Module({
  imports: [
    ModuleA,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
