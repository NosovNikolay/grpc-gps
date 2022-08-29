import {Module} from '@nestjs/common'
import {GpsModule} from './gps/gps.module';
import {SequelizeModule} from "@nestjs/sequelize";
import {GPSInfo} from "./gps/gps.model";

@Module({
    imports: [GpsModule,
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database:  process.env.POSTGRES_DB,
            models: [GPSInfo],
            autoLoadModels: true
        })
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
