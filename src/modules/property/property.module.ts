import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyController } from './property.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule], // Add your entities here
  controllers: [PropertyController],
  providers: [PropertyService],
  exports: [PropertyService], // Export the service if needed in other modules
})
export class PropertyModule {}
