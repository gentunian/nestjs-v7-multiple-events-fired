import { Controller, Get } from "@nestjs/common";
import { CommandBus, EventBus } from "@nestjs/cqrs";
import { FooBarEvent } from "../events/foo-bar.event";

@Controller('/foo')
export class FooBarController {
  constructor(private readonly commandBus: CommandBus,
    private readonly eventBus: EventBus) { }

  @Get('bar')
  async fooBar() {
    return this.eventBus.publish(new FooBarEvent());
  }
}