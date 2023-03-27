import { Controller, Get } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { FooBarCommand } from "../commands/foo-bar.command";

@Controller('/foo')
export class FooBarController {
  constructor(private readonly commandBus: CommandBus) { }

  @Get('bar')
  async fooBar() {
    this.commandBus.execute(new FooBarCommand('as'));
  }
}