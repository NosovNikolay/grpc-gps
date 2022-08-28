import { Controller, Get } from '@nestjs/common';
import {GpsService} from "./gps.service"
import {GrpcMethod} from "@nestjs/microservices";
import {RESDto, REQDto} from '../GPSInterface'

@Controller()
export class GpsController {
    constructor(private readonly appService: GpsService) {}

    @GrpcMethod('GpsController', 'safeGPSData')
    safeGPSData(data: REQDto, metadata: any): RESDto {
        return this.appService.safeGPSData(data)
    }
}
