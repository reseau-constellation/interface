import type { WorkBook } from "@e965/xlsx";
import type { ÉpingleBd, DonnéesBdExportées } from "./bds.ts";
import type { BaseÉpingleFavoris } from "./favoris.ts";

// Types mots-clefs
export type MotClefProjet = { idMotClef: string; source: "projet" | "bds" };

// Types épingles

export type ÉpingleProjet = {
  type: "projets";
  épingle: ContenuÉpingleProjet;
};

export type ContenuÉpingleProjet = BaseÉpingleFavoris & {
  bds: ÉpingleBd["épingle"];
};

// Types données

export type DonnéesProjetExportées = {
  nomProjet: string;
  bds: DonnéesBdExportées[];
};

export type DonnéesFichierProjetExportées = {
  docus: { docu: WorkBook; nom: string }[];
  documentsMédias: Set<string>;
  nomFichier: string;
};
