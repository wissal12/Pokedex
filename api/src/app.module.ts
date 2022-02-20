import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PokemonService } from './app.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [PokemonService],
})
export class AppModule {}
