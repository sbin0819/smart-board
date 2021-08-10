import { Injectable } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Card } from './entities/card.entity';
import { List } from 'src/lists/entities/list.entity';
@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,
    @InjectRepository(List)
    private listRepository: Repository<List>,
  ) {}

  async create(createCardDto: CreateCardDto) {
    const list = await this.listRepository.findOne({ where: { id: 1 } });
    const card = await this.cardRepository.create({
      ...createCardDto,
      list,
    });
    await this.cardRepository.save(card);
    return 'This action adds a new card';
  }

  async findAll() {
    const cards = await this.cardRepository.find();
    return cards.map((card) => card);
  }

  findOne(id: number) {
    return `This action returns a #${id} card`;
  }

  update(id: number, updateCardDto: UpdateCardDto) {
    return `This action updates a #${id} card`;
  }

  remove(id: number) {
    return `This action removes a #${id} card`;
  }
}
