import { DynamicModule, Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { FooBarController } from "./controllers/foo-bar.controller";
import { FooBarEventHandler } from "./events/foo-bar.handler";

@Module({
  imports: [
    CqrsModule,
  ],
  providers: [
    FooBarEventHandler,
  ],
  controllers: [
    FooBarController,
  ]
})
export class ModuleA {

  static forFeature(config: any): DynamicModule {
    console.log('do stuff with config', config);
    return {
      module: ModuleA,
      providers: [
        {
          useValue: config.value,
          provide: config.provide,
        },
      ]
    };
  }

}
