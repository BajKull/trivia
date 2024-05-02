import { Category } from "components/board/types";

import inTheAirTonightMp3 from "/sounds/single-note/phil collins - in the air tonight.mp3";
import wojownicyWodyMp3 from "/sounds/single-note/bracia figo fagot - wojownicy wody.mp3";
import californicationMp3 from "/sounds/single-note/red hot chilli peppers - californication.mp3";
import standByMeMp3 from "/sounds/single-note/ben e king - stand by me.mp3";
import legendMp3 from "/sounds/single-note/tevvez - legend.mp3";

export const poNutceCategory: Category = {
  id: "poNutce",
  name: "Po nutce",
  gradient: "green",
  questions: [
    {
      question: "Podaj tytuł piosenki",
      correctAnswer: "Red Hot Chilli Peppers - Californication",
      audio: {
        title: "Californication",
        author: "Red Hot Chilli Peppers",
        src: californicationMp3,
      },
    },
    {
      question: "Podaj tytuł piosenki",
      correctAnswer: "Tevvez - Legend",
      audio: {
        title: "Legend",
        author: "Tevvez",
        src: legendMp3,
      },
    },
    {
      question: "Podaj tytuł piosenki",
      correctAnswer: "Bracia Figo Fagot - Wojownicy Wódy",
      audio: {
        title: "Wojownicy Wódy",
        author: "Bracia Figo Fagot",
        src: wojownicyWodyMp3,
      },
    },

    {
      question: "Podaj tytuł piosenki",
      correctAnswer: "Ben E. King - Stand By Me",
      audio: {
        title: "Stand By Me",
        author: "Ben E. King",
        src: standByMeMp3,
      },
    },

    {
      question: "Podaj tytuł piosenki",
      correctAnswer: "Phil Collins - In The Air Tonight",
      audio: {
        title: "In The Air Tonight",
        author: "Phil Collins",
        src: inTheAirTonightMp3,
      },
    },
  ],
  bonus: {
    question:
      "Każda z drużyn ma za zadanie stworzyć nietuzinkową historię. Osoby w drużynie po kolei podają jedno słowo w celu utworzenia spójnej całości i tak w kółko. Zdania muszą być poprawne gramatycznie, inaczej historia się skończy. Wybierzcie po jednej osobie, która przejdzie do innej drużyny i dołączy do ich koła, aby im przeszkadzać. Osoba przeszkadzająca, również musi trzymać się reguły gramatyki - inaczej będzie pominięta w danej turze.",
  },
};
