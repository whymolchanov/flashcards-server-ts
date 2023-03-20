import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateFlashcardReqDto } from "./dto/create.flashcard.req.dto";
import { UpdateFlashcardDto } from "./dto/update-flashcard.dto";
import { Flashcard } from "./entities/flashcard.entity";

@Injectable()
export class FlashcardService {
  constructor(
    @InjectRepository(Flashcard)
    private flashcardsRepository: Repository<Flashcard>,
  ) {}

  create(dto: CreateFlashcardReqDto) {
    this.flashcardsRepository.create(dto);
  }

  /**
   * Take a first item in the queue.
   */
  findNext() {
    return `This action returns the next flashcard`;
  }

  findAll() {
    return `This action returns all flashcard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} flashcard`;
  }

  update(id: number, updateFlashcardDto: UpdateFlashcardDto) {
    return `This action updates a #${id} flashcard`;
  }

  remove(id: number) {
    return `This action removes a #${id} flashcard`;
  }
}
