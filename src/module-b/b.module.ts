import { Module } from "@nestjs/common";
import { ModuleA } from "src/module-a/a.module";

@Module({
  imports: [
    //ModuleA.forFeature({ value: 'config1', provide: 'ModuleB' }),
  ],
})
export class ModuleB { }