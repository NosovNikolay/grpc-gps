import { Controller, Get } from '@nestjs/common';
import {GpsService} from "./gps.service"
import {GrpcMethod} from "@nestjs/microservices";
import {RESDto, REQDto, DataArray} from "./dto/GPS.dto";

@Controller()
export class GpsController {
    constructor(private readonly GpsService: GpsService) {}
    @GrpcMethod('GpsController', 'saveGPSData')
    saveGPSData(data: REQDto, metadata: any): Promise<RESDto> {
        return this.GpsService.saveGPSData(data)
    }

    @GrpcMethod('GpsController', 'getGPSData')
    getGPSData(data: REQDto, metadata: any): Promise<DataArray> {
        return this.GpsService.getGPSData(data)
    }
}
