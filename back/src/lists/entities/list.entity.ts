import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinTable,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Board } from 'src/boards/board.entity';
import { Card } from 'src/cards/entities/card.entity';

@Entity()
export class List {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  boardId: number;

  @ManyToOne(() => Board, (board) => board.lists, { nullable: true })
  @JoinColumn({ name: 'boardId' })
  board: Board;

  @OneToMany(() => Card, (card) => card.list)
  @JoinTable()
  cards: Card[];

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn({ nullable: true })
  updated: Date;
}
