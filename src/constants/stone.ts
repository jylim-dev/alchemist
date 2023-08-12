export type STONE = "Urim" | "Thummim";

export enum STONES {
  Urim,
  Thummim,
}

export const STONE_MEANING: { [key in STONES]: STONE } = {
  [STONES.Urim]: "Urim",
  [STONES.Thummim]: "Thummim",
};
