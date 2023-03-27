import { Module } from "@nestjs/common";
import { ModuleA } from "src/module-a/a.module";

@Module({
  imports: [
    //ModuleA.forFeature({ value: 'config2', provide: 'ModuleC' }),
  ],
})
export class ModuleC { }