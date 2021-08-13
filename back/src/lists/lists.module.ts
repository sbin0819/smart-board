import { Module } from '@nestjs/common';
import { ListsService } from './lists.service';
import { ListsController } from './lists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { List } from './entities/list.entity';
import { Board } from 'src/boards/board.entity';
import { Card } from 'src/cards/entities/card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([List, Board, Card])],
  controllers: [ListsController],
  providers: [ListsService],
})
export class ListsModule {}
