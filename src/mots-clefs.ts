import type { BaseÉpingleFavoris } from "./favoris.ts";

// Types épingles

export type ÉpingleMotClef = {
  type: "motsClefs";
  épingle: ContenuÉpingleMotClef;
};

export type ContenuÉpingleMotClef = BaseÉpingleFavoris;
