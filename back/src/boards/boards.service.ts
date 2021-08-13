import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

import { Board } from './board.entity';
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

  async update(id: number, updateBoardDto: UpdateBoardDto) {
    const board = await this.boardRepository.findOne({ where: { id: id } });
    if (!board) {
      return {
        statusCode: 204,
        message: '해당하는 board가 없습니다.',
      };
    }
    board.title = updateBoardDto.title;
    const updatedBoard = await this.boardRepository.save(board);
    return updatedBoard;
  }

  async remove(id: number) {
    const board = await this.boardRepository.findOne({ where: { id: id } });
    const lists = await this.listRepository.find({ where: { boardId: id } });
    if (!board) {
      return {
        statusCode: 204,
        message: '해당하는 board가 없습니다.',
      };
    }
    await this.listRepository.remove(lists);
    if (lists) {
      await this.boardRepository.remove(board);
    }
    return `This action removes a #${id} board`;
  }
}
