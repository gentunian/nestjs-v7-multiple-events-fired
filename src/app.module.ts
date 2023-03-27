import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModuleA } from './module-a/a.module';
import { ModuleB } from './module-b/b.module';
import { ModuleC } from './module-c/c.module';

@Module({
  imports: [
    ModuleA,
    ModuleB,
    ModuleC,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
