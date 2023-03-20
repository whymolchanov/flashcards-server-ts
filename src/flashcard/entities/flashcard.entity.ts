import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IFlashcard } from "../interfaces/flashcard.interface";

@Entity()
export class Flashcard implements IFlashcard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @Column()
  answer: string;

  @Column()
  next_revision: Date;

  @Column()
  box: "1" | "2" | "3" | "4" | "5";
}
