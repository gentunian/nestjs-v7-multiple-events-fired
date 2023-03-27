import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { FooBarEvent } from "./foo-bar.event";

@EventsHandler(FooBarEvent)
export class FooBarEventHandler implements IEventHandler<FooBarEvent> {
  handle(event: FooBarEvent) {
    console.log(`${Date.now()} called`);
  }
}
