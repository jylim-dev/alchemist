import { STONES } from "../constants/stone";

export const getOmen = (question: string) => {
  const refinedQuestion = question
    .split("")
    .reduce(
      (prev, cur) => (prev += Math.floor(Math.random() * cur.charCodeAt(0))),
      0,
    );
  const elixer = 2;
  return STONES[refinedQuestion % elixer];
};
