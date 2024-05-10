import { Category } from "components/board/types";

import flightOfTheBumbleBeeMp3 from "/sounds/classical/Nikolai Rimsky-Korsakov - The Flight of the Bumble Bee.mp3";
import hungarianDanceMp3 from "/sounds/classical/Johannes Brahms - Hungarian Dance no. 5.mp3";
import nocturneMp3 from "/sounds/classical/Fryderyk Chopin - Nocturne op.9 No.2.mp3";
import rideOfTheValkyriesMp3 from "/sounds/classical/Richard Wagner - Ride of the Valkyries.mp3";
import williamTellOvertureMp3 from "/sounds/classical/Gioachino Rossini - William Tell Overture.mp3";

export const klasycznieCategory: Category = {
  id: "klasycznie",
  name: "Klasycznie",
  gradient: "green",
  questions: [
    {
      question: "Podaj tytuł utworu",
      audio: {
        author: "Nikolai Rimsky-Korsakov",
        src: flightOfTheBumbleBeeMp3,
        title: "The Flight of the Bumble Bee",
      },
      correctAnswer: "The Flight of the Bumble Bee",
    },
    {
      question: "Podaj tytuł utworu",
      audio: {
        author: "Fryderyk Chopin",
        src: nocturneMp3,
        title: "Nocturne op.9 No.2",
      },
      correctAnswer: "Nocturne op.9 No.2",
    },
    {
      question: "Podaj tytuł utworu",
      audio: {
        author: "Richard Wagner",
        src: rideOfTheValkyriesMp3,
        title: "Ride of the Valkyries",
      },
      correctAnswer: "Ride of the Valkyries",
    },
    {
      question: "Podaj tytuł utworu",
      audio: {
        author: "Johannes Brahms",
        src: hungarianDanceMp3,
        title: "Hungarian Dance no. 5",
      },
      correctAnswer: "Hungarian Dance no. 5",
    },
    {
      question: "Podaj tytuł utworu",
      audio: {
        author: "Gioachino Rossini",
        src: williamTellOvertureMp3,
        title: "William Tell Overture",
      },
      correctAnswer: "William Tell Overture",
    },
  ],
  bonus: {
    question:
      "Wymień jak najwięcej kompozytorów muzyki klasycznej oraz kraje, z których pochodzili",
  },
};
