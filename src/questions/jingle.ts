import { Category } from "components/board/types";

import dundersztycMp3 from "/sounds/jingles/dundersztyc.mp3";
import intelMp3 from "/sounds/jingles/intel.mp3";
import oldSpiceMp3 from "/sounds/jingles/old spice.mp3";
import tMobileMp3 from "/sounds/jingles/t-mobile.mp3";
import warnerBrosMp3 from "/sounds/jingles/warner bros.mp3";

export const dzingielCategory: Category = {
  id: "dzingiel",
  name: "Dżingiel",
  gradient: "orange",
  questions: [
    {
      question: "Skąd pochodzi ta melodia",
      audio: {
        author: "-",
        src: dundersztycMp3,
        title: "Spółka Zło Dundersztyca",
      },
      correctAnswer: "Spółka Zło Dundersztyca",
    },
    {
      question: "Skąd pochodzi ta melodia",
      audio: {
        author: "-",
        src: oldSpiceMp3,
        title: "Old Spice",
      },
      correctAnswer: "Old Spice",
    },
    {
      question: "Skąd pochodzi ta melodia",
      audio: {
        author: "-",
        src: warnerBrosMp3,
        title: "Warner Bros",
      },
      correctAnswer: "Warner Bros",
    },
    {
      question: "Skąd pochodzi ta melodia",
      audio: {
        author: "-",
        src: tMobileMp3,
        title: "T-Mobile",
      },
      correctAnswer: "T-Mobile",
    },
    {
      question: "Skąd pochodzi ta melodia",
      audio: {
        author: "-",
        src: intelMp3,
        title: "Intel",
      },
      correctAnswer: "Intel",
    },
  ],
  bonus: {
    question:
      "Każda z drużyn wybiera jeden produkt, następnie po wylosowaniu z puli danego produktu, każda z drużyn musi stworzyć krótki, chwytliwy dżingiel",
  },
};
