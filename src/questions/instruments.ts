import { Category } from "components/board/types";

import bassoonMp3 from "/sounds/instruments/bassoon.mp3";
import drumMp3 from "/sounds/instruments/drum.mp3";
import harpsichordMp3 from "/sounds/instruments/harpsichord.mp3";
import mandolinMp3 from "/sounds/instruments/mandolin.mp3";
import oboeMp3 from "/sounds/instruments/oboe.mp3";

export const instrumentyCategory: Category = {
  id: "instrumenty",
  name: "Instrumenty",
  gradient: "red",
  questions: [
    {
      question: "Podaj nazwę tego instrumentu",
      audio: {
        author: "-",
        src: drumMp3,
        title: "Werbel",
      },
      correctAnswer: "Werbel",
    },
    {
      question: "Podaj nazwę tego instrumentu",
      audio: {
        author: "-",
        src: mandolinMp3,
        title: "Mandolina",
      },
      correctAnswer: "Mandolina",
    },
    {
      question: "Podaj nazwę tego instrumentu",
      audio: {
        author: "-",
        src: oboeMp3,
        title: "Obój",
      },
      correctAnswer: "Obój",
    },
    {
      question: "Podaj nazwę tego instrumentu",
      audio: {
        author: "-",
        src: bassoonMp3,
        title: "Fagot",
      },
      correctAnswer: "Fagot",
    },
    {
      question: "Podaj nazwę tego instrumentu",
      audio: {
        author: "-",
        src: harpsichordMp3,
        title: "Klawesyn",
      },
      correctAnswer: "Klawesyn",
    },
  ],
  bonus: {
    question: "Odtwórz nutę zagraną na pianinie",
  },
};
