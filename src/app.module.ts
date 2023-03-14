import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
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
      database: "test",
      entities: [],
      // TODO(before release): remove this line
      synchronize: true,
    }),
    FlashcardModule,
  ],
})
export class AppModule {}
