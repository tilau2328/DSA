import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { AppApiModule } from './api/app.api.module';

@Module({
  imports: [
    CoreModule,
    AppApiModule
  ],
})
export class AppModule {}
