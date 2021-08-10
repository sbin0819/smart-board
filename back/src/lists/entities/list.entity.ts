import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { Board } from 'src/boards/entities/board.entity';
import { Card } from 'src/cards/entities/card.entity';

@Entity()
export class List {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => Board, (board) => board.lists)
  board: Board;

  @OneToMany(() => Card, (card) => card.list)
  @JoinTable()
  cards: Card[];
}
