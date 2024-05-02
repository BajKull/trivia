import { Category } from "components/board/types";

import balCzikiMp3 from "/sounds/what-next/Fineasz i Ferb - Bal Cziki Bal Bal.mp3";
import kingBruceLeeKarateMistrzMp3 from "/sounds/what-next/Franek Kimono - King Bruce Lee Karate Mistrz.mp3";
import harnasIceTeaMp3 from "/sounds/what-next/Gawryle - Harnas Ice Tea.mp3";
import eyeOfTheTigerMp3 from "/sounds/what-next/Survivor - Eye Of The Tiger.mp3";
import lubiewracacTamGdzieBylemMp3 from "/sounds/what-next/Zbigniew Wodecki - Lubie wracac tam gdzie bylem.mp3";

export const coDalejCategory: Category = {
  id: "coDalej",
  name: "Co dalej",
  gradient: "orange",
  questions: [
    {
      question: "Dokończ słowa piosenki",
      audio: {
        author: "Fineasz i Ferb",
        src: balCzikiMp3,
        title: "Bał Cziki Bał Bał",
      },
      correctAnswer: "giczi giczi gu znaczy kocham cię!",
      hintPreview: true,
    },
    {
      question: "Dokończ słowa piosenki",
      audio: {
        author: "Franek Kimono",
        src: kingBruceLeeKarateMistrzMp3,
        title: "King Bruce Lee Karate Mistrz",
      },
      correctAnswer: "mogę robić wszystko",
      hintPreview: true,
    },
    {
      question: "Dokończ słowa piosenki",
      audio: {
        author: "Gawryle",
        src: harnasIceTeaMp3,
        title: "Harnaś Ice Tea",
      },
      correctAnswer: "Harnaś to prima",
      hintPreview: true,
    },
    {
      question: "Dokończ słowa piosenki",
      audio: {
        author: "Zbigniew Wodecki",
        src: lubiewracacTamGdzieBylemMp3,
        title: "Lubię wracać tam gdzie byłem",
      },
      correctAnswer: "ta dziewczyna z warkoczami",
      hintPreview: true,
    },
    {
      question: "Dokończ słowa piosenki",
      audio: {
        author: "Survivor",
        src: eyeOfTheTigerMp3,
        title: "Eye Of The Tiger",
      },
      correctAnswer: "risin' up, back on the street",
      hintPreview: true,
    },
  ],
  bonus: {
    question:
      "Głuchy telefon. Każda z drużyn dostanie krótki opis zawierający słowa klucze. Na początku należy wybrać kolejność przekazywania wiadomości. Jedna osoba opowiada drugiej zapamiętaną treść z jak najwiekszą ilością szczegołów w trakcie gdy reszta drużyny nie słyszy przekazywanego komunikatu. Ostatnia osoba stara się odtworzyć z jak największa dokładnością oryginalny tekst.",
  },
};
