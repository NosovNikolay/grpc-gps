import { Injectable } from '@nestjs/common';
import {GPS} from "./GPSInterface";

@Injectable()
export class AppService {
  public safeGPSData(data: string): GPS {
    return {
      x: '11',
      y: '22'
    };
  }
}
