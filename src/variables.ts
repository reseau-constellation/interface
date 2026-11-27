import type { BaseÉpingleFavoris } from "./favoris.ts";

export type CatégorieBaseVariables =
  | "numérique"
  | "horoDatage"
  | "intervaleTemps"
  | "chaîne"
  | "chaîneNonTraductible"
  | "booléen"
  | "géojson"
  | "vidéo"
  | "audio"
  | "image"
  | "fichier";

export type CatégorieVariable =
  | {
      type: "simple";
      catégorie: CatégorieBaseVariables;
    }
  | {
      type: "liste";
      catégorie: CatégorieBaseVariables;
    };

// Types épingles

export type ÉpingleVariable = {
  type: "variables";
  épingle: ContenuÉpingleVariable;
};

export type ContenuÉpingleVariable = BaseÉpingleFavoris;
