export interface Flashcard {
  questions: string;
  answer: string;
  next_revision: Date;
  box: "1" | "2" | "3" | "4" | "5";
}
