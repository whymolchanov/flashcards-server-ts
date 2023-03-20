import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
} from "@nestjs/common";
import { FlashcardService } from "./flashcard.service";
import { CreateFlashcardReqDto } from "./dto/create.flashcard.req.dto";
import { UpdateFlashcardDto } from "./dto/update-flashcard.dto";

@Controller("flashcard")
export class FlashcardController {
  constructor(private readonly flashcardService: FlashcardService) {}

  @Post()
  create(@Body(new ValidationPipe()) dto: CreateFlashcardReqDto) {
    return this.flashcardService.create(dto);
  }

  @Get()
  findNext() {
    return this.flashcardService.findNext();
  }

  @Get("all")
  findAll() {
    return this.flashcardService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.flashcardService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateFlashcardDto: UpdateFlashcardDto,
  ) {
    return this.flashcardService.update(+id, updateFlashcardDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.flashcardService.remove(+id);
  }
}
