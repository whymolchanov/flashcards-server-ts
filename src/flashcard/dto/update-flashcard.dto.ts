import { PartialType } from "@nestjs/mapped-types";
import { CreateFlashcardReqDto } from "./create.flashcard.req.dto";

export class UpdateFlashcardDto extends PartialType(CreateFlashcardReqDto) {}
