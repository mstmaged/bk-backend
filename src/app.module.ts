import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { envValidationSchema } from './configs/env.validation';
import { DatabaseModule } from './database/database.module';
import { HotelsModule } from './modules/hotels/hotels.module';
import { UsersModule } from './modules/users/users.module';
import configuration from './configs/configuration';
import { UsersController } from './modules/users/users.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: envValidationSchema,
      load: [configuration],
    }),
    DatabaseModule,
    UsersModule,
    HotelsModule,
  ],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
