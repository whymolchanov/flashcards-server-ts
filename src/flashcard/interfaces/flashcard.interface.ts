// TODO(question): can I use a JS class as an interface/type? If yes, I don't need this file anymore.
export interface Flashcard {
  questions: string;
  answer: string;
  next_revision: Date;
  box: "1" | "2" | "3" | "4" | "5";
}
