

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { join } from 'path'; // <-- Add this

const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      {
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


