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

  async create(listId: string, createCardDto: CreateCardDto) {
    const list = await this.listRepository.findOne({ where: { id: listId } });
    const card = await this.cardRepository.create({
      ...createCardDto,
      list,
    });
    await this.cardRepository.save(card);
    return card;
  }

  async findAll() {
    const cards = await this.cardRepository.find();
    return cards.map((card) => card);
  }

  async findOne(id: number) {
    const card = await this.cardRepository.findOne({ where: { id: id } });
    return card;
  }

  async update(id: number, updateCardDto: UpdateCardDto) {
    const card = await this.cardRepository.findOne({ where: { id: id } });
    if (!card) {
      return {
        statusCode: 204,
        message: '해당하는 card가 없습니다.',
      };
    }
    card.title = updateCardDto.title;
    const updatedCard = await this.cardRepository.save(card);
    return updatedCard;
  }

  async remove(id: number) {
    const list = await this.cardRepository.findOne({ where: { id: id } });
    await this.cardRepository.remove(list);
    return `This action removes a #${id} card`;
  }
}
