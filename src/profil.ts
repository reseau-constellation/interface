import type { BaseÉpingleFavoris, DispositifsÉpingle } from "./favoris.ts";

// Types épingle
export type ÉpingleProfil = {
  type: "profil";
  épingle: ContenuÉpingleProfil;
};

export type ContenuÉpingleProfil = BaseÉpingleFavoris & {
  favoris: DispositifsÉpingle;
};
