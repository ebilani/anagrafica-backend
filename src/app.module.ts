import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnagraficaModule } from './anagrafica/anagrafica.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AnagraficaModule,
    AuthModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'esterina',
      database: 'anagrafica_db',
      autoLoadModels: true,
      synchronize: true,
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
