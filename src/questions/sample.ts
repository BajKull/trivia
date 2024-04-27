import { Category } from "../components/board/types";
import inTheAirTonightMp3 from "/sounds/phil collins - in the air tonight.mp3";
import wojownicyWodyMp3 from "/sounds/bracia figo fagot - wojownicy wody.mp3";
import californicationMp3 from "/sounds/red hot chilli peppers - californication.mp3";
import standByMeMp3 from "/sounds/ben e king - stand by me.mp3";
import legendMp3 from "/sounds/tevvez - legend.mp3";

export const sampleCategory: Category = {
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
};

export const sampleCategory2: Category = {
  id: "akustycznie",
  name: "Akustycznie",
  gradient: "indigo",
  questions: [
    {
      question: "Test",
      answers: ["1", "2", "3", "4"],
      correctAnswer: "2",
    },
    {
      question: "Test2",
      answers: ["1", "2", "3", "4"],
      correctAnswer: "2",
    },
    {
      question: "Test3",
      answers: ["1", "2", "3", "4"],
      correctAnswer: "2",
    },
    {
      question: "Test4",
      answers: ["1", "2", "3", "4"],
      correctAnswer: "2",
    },
    {
      question: "Test5",
      answers: ["1", "2", "3", "4"],
      correctAnswer: "2",
    },
  ],
};

export const sampleCategory3: Category = {
  id: "coDalej",
  name: "Co dalej",
  gradient: "orange",
  questions: [
    {
      question: "Test",
      answers: ["1", "2", "3", "4"],
      correctAnswer: "2",
    },
    {
      question: "Test2",
      answers: ["1", "2", "3", "4"],
      correctAnswer: "2",
    },
    {
      question: "Test3",
      answers: ["1", "2", "3", "4"],
      correctAnswer: "2",
    },
    {
      question: "Test4",
      answers: ["1", "2", "3", "4"],
      correctAnswer: "2",
    },
    {
      question: "Test5",
      answers: ["1", "2", "3", "4"],
      correctAnswer: "2",
    },
  ],
};

export const sampleCategory4: Category = {
  id: "teledysk",
  name: "Teledysk",
  gradient: "purple",
  questions: [
    {
      question: "Test",
      answers: ["1", "2", "3", "4"],
      correctAnswer: "2",
    },
    {
      question: "Test2",
      answers: ["1", "2", "3", "4"],
      correctAnswer: "2",
    },
    {
      question: "Test3",
      answers: ["1", "2", "3", "4"],
      correctAnswer: "2",
    },
    {
      question: "Test4",
      answers: ["1", "2", "3", "4"],
      correctAnswer: "2",
    },
    {
      question: "Test5",
      answers: ["1", "2", "3", "4"],
      correctAnswer: "2",
    },
  ],
};

export const sampleCategory5: Category = {
  id: "ledengdy",
  name: "Legendy",
  gradient: "red",
  questions: [
    {
      question: "Test",
      answers: ["1", "2", "3", "4"],
      correctAnswer: "2",
    },
    {
      question: "Test2",
      answers: ["1", "2", "3", "4"],
      correctAnswer: "2",
    },
    {
      question: "Test3",
      answers: ["1", "2", "3", "4"],
      correctAnswer: "2",
    },
    {
      question: "Test4",
      answers: ["1", "2", "3", "4"],
      correctAnswer: "2",
    },
    {
      question: "Test5",
      answers: ["1", "2", "3", "4"],
      correctAnswer: "2",
    },
  ],
};
