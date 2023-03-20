import { IsString } from "class-validator";
import { IFlashcard } from "../interfaces/flashcard.interface";

export class CreateFlashcardReqDto
  implements Pick<IFlashcard, "question" | "answer">
{
  @IsString()
  question: string;

  @IsString()
  answer: string;
}
