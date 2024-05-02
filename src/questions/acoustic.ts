import { Category } from "components/board/types";

import carryOnWaywardSonMp3 from "/sounds/acoustic/Kansas - Carry on Wayward Son.mp3";
import faintMp3 from "/sounds/acoustic/Linkin Park - Faint.mp3";
import interstellarMp3 from "/sounds/acoustic/Hans Zimmer - Interstellar.mp3";
import plasticLoveMp3 from "/sounds/acoustic/Mariya Takeuchi - Plastic Love.mp3";
import wakeMeUpWhenSemptemberEndsMp3 from "/sounds/acoustic/Green Day - Wake Me Up When Semptember Ends.mp3";

export const akustycznieCategory: Category = {
  id: "akustycznie",
  name: "Akustycznie",
  gradient: "indigo",
  questions: [
    {
      question: "Podaj tytuł piosenki",
      audio: {
        author: "Hans Zimmer",
        src: interstellarMp3,
        title: "Interstellar",
      },
      correctAnswer: "Hans Zimmer - Interstellar",
    },
    {
      question: "Podaj tytuł piosenki",
      audio: {
        author: "Kansas",
        src: carryOnWaywardSonMp3,
        title: "Carry on Wayward Son",
      },
      correctAnswer: "Kansas - Carry on Wayward Son",
    },
    {
      question: "Podaj tytuł piosenki",
      audio: {
        author: "Green Day",
        src: wakeMeUpWhenSemptemberEndsMp3,
        title: "Wake Me Up When Semptember Ends",
      },
      correctAnswer: "Green Day - Wake Me Up When Semptember Ends",
    },
    {
      question: "Podaj tytuł piosenki",
      audio: {
        author: "Mariya Takeuchi",
        src: plasticLoveMp3,
        title: "Plastic Love",
      },
      correctAnswer: "Mariya Takeuchi - Plastic Love",
    },
    {
      question: "Podaj tytuł piosenki",
      audio: {
        author: "Linkin Park",
        src: faintMp3,
        title: "Faint",
      },
      correctAnswer: "Linkin Park - Faint.mp3",
    },
  ],
  bonus: {
    question:
      "Każda z drużyn wybiera piosenkę, którą będzie wykonywać w formacie a cappelli. Członkowie drużyny powinni naśladować różne instrumenty/odgłosy lub tworzyć harmonie.",
  },
};
