import { Module } from "@nestjs/common";
import { FlashcardModule } from "./flashcard/flashcard.module";

@Module({
  imports: [FlashcardModule],
})
export class AppModule {}
