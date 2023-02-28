import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StockModule } from './stock/stock.module';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
@Module({
  imports: [StockModule, TypeOrmModule.forRoot(typeOrmConfig)],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
