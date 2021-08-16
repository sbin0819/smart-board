import { List } from 'src/lists/entities/list.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => List, (list) => list.cards)
  list: List;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn({ nullable: true })
  updated: Date;
}
