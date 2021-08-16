import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';

import { List } from './entities/list.entity';
import { Board } from 'src/boards/board.entity';

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
    return list;
  }

  async findAll() {
    const lists = await this.listRepository.find({ relations: ['cards'] });
    return lists;
  }

  async findOne(id: number) {
    const list = await this.listRepository.findOne({
      where: { id: id },
      relations: ['cards'],
    });
    return list;
  }

  async update(id: number, updateListDto: UpdateListDto) {
    const list = await this.listRepository.findOne({ where: { id: id } });
    if (!list) {
      return {
        statusCode: 204,
        message: '해당하는 list가 없습니다.',
      };
    }
    list.title = updateListDto.title;
    const updatedList = await this.listRepository.save(list);
    return updatedList;
  }

  async remove(id: number) {
    const list = await this.listRepository.findOne({ where: { id: id } });
    await this.listRepository.remove(list);
    return `This action removes a #${id} list`;
  }
}
