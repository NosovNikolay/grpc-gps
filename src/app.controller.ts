import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {GrpcMethod} from "@nestjs/microservices";
import {GPS} from './GPSInterface'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('AppController', 'safeGPSData')
  safeGPSData(data: string, metadata: any): GPS {
    console.log("data = ")
    console.log(data)
    return this.appService.safeGPSData(data)
  }
}
