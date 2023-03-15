import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Flashcard {
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
