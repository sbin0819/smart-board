import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { List } from 'src/lists/entities/list.entity';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(() => List, (list) => list.board)
  @JoinTable()
  lists: List[];

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn({ nullable: true })
  updated: Date;
}
