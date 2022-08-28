import {HttpException, Injectable} from '@nestjs/common';
import {RESDto, REQDto, DataArray} from "./dto/GPS.dto";
import GPS from "gps";
import {GPSInfo} from "./gps.model";
import {InjectModel} from "@nestjs/sequelize";

@Injectable()
export class GpsService {

    constructor(@InjectModel(GPSInfo) private gpsRepository: typeof GPSInfo) {
    }

    public async getGPSData(data: REQDto): Promise<DataArray> {
        const deviceId = data.deviceId;
        const gpsInfo: any = await this.gpsRepository.findAll({where: {deviceId}});
        let result = gpsInfo.map((elem) => new Object( elem.dataValues))
        return {
            data: result,
            error: [''],
            status: 200
        };
    }

    public async saveGPSData(data: REQDto): Promise<RESDto> {
        const gps = new GPS;
        let parsed: any = null;
        gps.on('data', data => {
            parsed = data
        })
        gps.update(data.gpsData);
        // Need to fix proto
        // Add Error/status fields
        if (!parsed) {
            return {
                data: null,
                error: ["Bad Request",],
                status: 400
            }
        }
        parsed.deviceId = data.deviceId;
        const gpsInfo: any = await this.gpsRepository.create(parsed);
        return {
            data: gpsInfo.dataValues,
            error: [""],
            status: 200
        }
    }
}