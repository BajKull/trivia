import { Category } from "components/board/types";

import levitatingJpg from "/images/Dua Lipa - Levitating.jpg";
import movesLikeJaggerJpg from "/images/Maroon 5 - Moves Like Jagger.jpg";
import pokerFaceJpg from "/images/Lady Gaga - Poker Face.jpg";
import thriftShopJpg from "/images/Macklemore - Thrift Shop.jpg";
import timberJpg from "/images/Mr Worldwide - Timber.jpg";

export const teledyskCategory: Category = {
  id: "teledysk",
  name: "Teledysk",
  gradient: "purple",
  questions: [
    {
      question: "Skąd pochodzi to zdjęcie",
      image: thriftShopJpg,
      correctAnswer: "Macklemore - Thrift Shop",
    },
    {
      question: "Skąd pochodzi to zdjęcie",
      image: pokerFaceJpg,
      correctAnswer: "Lady Gaga - Poker Face",
    },
    {
      question: "Skąd pochodzi to zdjęcie",
      image: levitatingJpg,
      correctAnswer: "Dua Lipa - Levitating",
    },
    {
      question: "Skąd pochodzi to zdjęcie",
      image: movesLikeJaggerJpg,
      correctAnswer: "Maroon 5 - Moves Like Jagger",
    },
    {
      question: "Skąd pochodzi to zdjęcie",
      image: timberJpg,
      correctAnswer: "Mr Worldwide - Timber",
    },
  ],
};
