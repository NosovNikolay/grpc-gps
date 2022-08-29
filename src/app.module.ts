import {Module} from '@nestjs/common'
import {GpsModule} from './gps/gps.module';
import {SequelizeModule} from "@nestjs/sequelize";
import {GPSInfo} from "./gps/gps.model";

@Module({
    imports: [GpsModule,
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'gps',
            models: [GPSInfo],
            autoLoadModels: true
        })
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
