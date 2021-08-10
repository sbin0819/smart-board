import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';

import { List } from './entities/list.entity';
import { Board } from 'src/boards/entities/board.entity';

@Injectable()
export class ListsService {
  constructor(
    @InjectRepository(List)
    private listRepository: Repository<List>,
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  async create(borderId: string, createListDto: CreateListDto) {
    const board = await this.boardRepository.findOne({
      where: { id: borderId },
    });
    const list = await this.listRepository.create({
      ...createListDto,
      board,
    });
    await this.listRepository.save(list);
    return 'This action adds a new list';
  }

  async findAll() {
    const lists = await this.listRepository.find({ relations: ['cards'] });
    return lists;
  }

  findOne(id: number) {
    return `This action returns a #${id} list`;
  }

  update(id: number, updateListDto: UpdateListDto) {
    return `This action updates a #${id} list`;
  }

  remove(id: number) {
    return `This action removes a #${id} list`;
  }
}
