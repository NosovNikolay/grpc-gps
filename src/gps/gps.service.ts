import { Injectable } from '@nestjs/common';
import {RESDto, REQDto} from "../GPSInterface";
import GPS from "gps";

@Injectable()
export class GpsService {
    public safeGPSData(data: REQDto): RESDto {
        console.log(data)
        const gps = new GPS;
        let parsed: any = null;
        gps.on('data', data => {
            parsed = data
        })
        gps.update(data.data);
        console.log(parsed)
        if (!parsed) {
            console.log('a')
        }

        return {
            x: '11',
            y: '22'
        };
    }
}