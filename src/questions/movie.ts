import { Category } from "components/board/types";

import ecstasyofGoldMp3 from "/sounds/movie/Ennio Morricone - The Ecstasy of Gold.mp3";
import whiplashMp3 from "/sounds/movie/Hank Levy - Whiplash.mp3";
import onceUponATimeInAfricaMp3 from "/sounds/movie/Hans Zimmer - Once Upon A Time In Africa.mp3";
import losAlamosMp3 from "/sounds/movie/Ludwig Goransson - Los Alamos.mp3";
import ratatouilleMp3 from "/sounds/movie/Michael Giacchino - Ratatouille.mp3";

export const muzykaFilmowaCategory: Category = {
  id: "muzykaFilmowa",
  name: "Muzyka filmowa",
  gradient: "purple",
  questions: [
    {
      question: "Podaj nazwę filmu, z którego pochodzi ten utwór",
      audio: {
        author: "Ennio Morricone",
        src: ecstasyofGoldMp3,
        title: "The Ecstasy of Gold",
      },
      correctAnswer: "The Good, the Bad and the Ugly",
    },
    {
      question: "Podaj nazwę filmu, z którego pochodzi ten utwór",
      audio: {
        author: "Michael Giacchino",
        src: ratatouilleMp3,
        title: "Ratatouille",
      },
      correctAnswer: "Ratatouille",
    },
    {
      question: "Podaj nazwę filmu, z którego pochodzi ten utwór",
      audio: {
        author: "Ludwig Goransson",
        src: losAlamosMp3,
        title: "Los Alamos",
      },
      correctAnswer: "Oppenheimer",
    },
    {
      question: "Podaj nazwę filmu, z którego pochodzi ten utwór",
      audio: {
        author: "Hank Levy",
        src: whiplashMp3,
        title: "Whiplash",
      },
      correctAnswer: "Whiplash",
    },
    {
      question: "Podaj nazwę filmu, z którego pochodzi ten utwór",
      audio: {
        author: "Hans Zimmer",
        src: onceUponATimeInAfricaMp3,
        title: "Once Upon A Time In Africa",
      },
      correctAnswer: "Madagascar: Escape 2 Africa",
    },
  ],
  bonus: {
    question:
      "Każda z drużyn musi wypisać jak najwięcej filmowych ścieżek dźwiękowych. Nie można powtarzać tego samego filmu wielokrotnie.\n\nTytuł i film - 1pkt\nKompozytor i film - 2pkt\nTytył, film i kompozytor - 4pkt",
  },
};
