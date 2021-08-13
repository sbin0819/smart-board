import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

import { Board } from './entities/board.entity';
import { List } from 'src/lists/entities/list.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
    @InjectRepository(List)
    private listRepository: Repository<List>,
  ) {}

  async create(createBoardDto: CreateBoardDto) {
    const board = await this.boardRepository.save(createBoardDto);
    return board;
  }

  async findAll() {
    const boards = await this.boardRepository.find();
    return boards;
  }

  async findOne(id: number) {
    const board = await this.boardRepository.findOne({
      where: { id: id },
    });
    if (!board) {
      return {
        statusCode: 204,
        message: '해당하는 board가 없습니다.',
      };
    }
    return board;
  }

  async findOneAndChildren(id: number) {
    const board = await this.boardRepository.findOne({
      where: { id: id },
      relations: ['lists', 'lists.cards'],
    });
    if (!board) {
      return {
        statusCode: 204,
        message: '해당하는 board가 없습니다.',
      };
    }
    return board;
  }

  update(id: number, updateBoardDto: UpdateBoardDto) {
    return `This action updates a #${id} board`;
  }

  async remove(id: number) {
    const board = await this.boardRepository.findOne({ where: { id: id } });
    const lists = await this.listRepository.find();

    console.log(lists);
    if (!board) {
      return {
        statusCode: 204,
        message: '해당하는 board가 없습니다.',
      };
    }
    // await this.boardRepository.remove(board);
    return `This action removes a #${id} board`;
  }
}
