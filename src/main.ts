import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {Transport, MicroserviceOptions} from '@nestjs/microservices';
import {join} from 'path';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
        AppModule,
        {
            logger: ['error', 'warn', process.env.DEBUG ? 'debug' : 'log'],
            transport: Transport.GRPC,
            options: {
                url: '0.0.0.0:50051',
                package: 'GPS',
                protoPath: join(__dirname, '../proto/gps.proto'),
            },
        }
    );
    await app.listen()
}

bootstrap();
