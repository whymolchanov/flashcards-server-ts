import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Flashcard } from "./flashcard/entities/flashcard.entity";
import { FlashcardModule } from "./flashcard/flashcard.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      // TODO(before release): don't store password and username and database here
      username: "postgres",
      password: "root",
      // TODO(before release): add a prod db here as well
      database: "dev",
      entities: [Flashcard],
      // TODO(before release): remove this line OR turn it on only for the development environment
      synchronize: true,
    }),
    // TODO(choir): it is better to name modules in a plural form FlashcardsModule
    FlashcardModule,
  ],
})
export class AppModule {}
