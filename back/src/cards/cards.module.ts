import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './entities/card.entity';
import { List } from 'src/lists/entities/list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Card, List])],
  controllers: [CardsController],
  providers: [CardsService],
})
export class CardsModule {}
