import { Injectable } from "@nestjs/common";
import { CreateFlashcardDto } from "./dto/create-flashcard.dto";
import { UpdateFlashcardDto } from "./dto/update-flashcard.dto";

@Injectable()
export class FlashcardService {
  create(createFlashcardDto: CreateFlashcardDto) {
    return "This action adds a new flashcard";
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
