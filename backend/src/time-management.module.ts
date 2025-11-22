import { Module } from '@nestjs/common';
import { AppController } from './time_management_controller';
import { AppService } from './time_management_service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
