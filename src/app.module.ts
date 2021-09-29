import { Module } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { UserModule } from './modules/user/user.module';
import { ProductoModule } from './modules/producto/producto.module';

@ApiTags('App Module')
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig), 
    UserModule, 
    ProductoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
