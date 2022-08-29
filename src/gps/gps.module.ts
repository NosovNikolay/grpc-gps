import {Module} from '@nestjs/common';
import {GpsService} from './gps.service';
import {GpsController} from './gps.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {GPSInfo} from "./gps.model";

@Module({
    providers: [GpsService],
    controllers: [GpsController],
    imports: [
        SequelizeModule.forFeature([GPSInfo]),
    ]
})
export class GpsModule {
}
