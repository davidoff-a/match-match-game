import { Module } from "./module";

export function bootstrap (module: Module):void{
  module.start();
}
