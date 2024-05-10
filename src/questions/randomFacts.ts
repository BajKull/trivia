import { Category } from "components/board/types";

export const ciekawostkiCategory: Category = {
  id: "ciekawostki",
  name: "Ciekawostki",
  gradient: "indigo",
  questions: [
    {
      question: "Jaki jest największy instrument na świecie?",
      correctAnswer: "Organy",
    },
    {
      question: "Co wytwarza lub czym jest najgłośniejszy dźwięk?",
      correctAnswer: "Czarna dziura",
    },
    {
      question:
        "Jak nazywa się pierwszy zespół muzyczny, który zagrał na wszystkich kontynentach?",
      correctAnswer: "Metallica",
    },
    {
      question: "Czym jest najstarszy odkryty instrument muzyczny?",
      correctAnswer: "Flet",
    },
    {
      question: "Kto i kiedy wynalazł radio?",
      correctAnswer:
        "Nikola Tesla/Guglielmo Marconi na przełomie XIX i XX wieku",
    },
  ],
  bonus: {
    question:
      "Na zlecenie instytutu badań z dupy, wymyśl jakąś losową ciekawostkę o tematyce muzycznej. Najbardziej przekonująca wygrywa",
  },
};
