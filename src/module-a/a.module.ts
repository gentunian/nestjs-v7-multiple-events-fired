import { DynamicModule, Module } from "@nestjs/common";
import { CommandBus, CqrsModule, EventBus } from "@nestjs/cqrs";
import { FooBarCommandHandler } from "./commands/foo-bar.handler";
import { FooBarController } from "./controllers/foo-bar.controller";
import { FooBarEventHandler } from "./events/foo-bar.handler";

@Module({
  imports: [
    CqrsModule,
  ],
  providers: [
    FooBarEventHandler,
    FooBarCommandHandler,
  ],
  controllers: [
    FooBarController,
  ]
})
export class ModuleA {

  

}
