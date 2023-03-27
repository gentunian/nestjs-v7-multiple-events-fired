import {
  CommandHandler,
  EventBus,
  ICommandHandler,
} from '@nestjs/cqrs';
import { FooBarEvent } from '../events/foo-bar.event';
import { FooBarCommand } from './foo-bar.command';

@CommandHandler(FooBarCommand)
export class FooBarCommandHandler implements ICommandHandler<FooBarCommand> {
  constructor(private readonly eventBus: EventBus) { }

  execute(command: FooBarCommand): Promise<any> {
    return this.eventBus.publish(new FooBarEvent());
  }
}
