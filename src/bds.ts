import type { WorkBook, BookType } from "@e965/xlsx";
import type { BaseÉpingleFavoris, DispositifsÉpingle } from "./favoris.ts";
import type { Métadonnées, StatutDonnées } from "./objets.ts";
import type {
  DifférenceTableaux,
  DonnéesTableauExportées,
} from "./tableaux.ts";

// Types épingles
export type ÉpingleBd = {
  type: "bds";
  épingle: ContenuÉpingleBd;
};

export type ContenuÉpingleBd = BaseÉpingleFavoris & {
  données: {
    tableaux: DispositifsÉpingle;
    fichiers: DispositifsÉpingle;
  };
};

// Types différences

export type DifférenceBds =
  | DifférenceBDTableauSupplémentaire
  | DifférenceBDTableauManquant
  | DifférenceTableauxBds;

export type DifférenceBDTableauManquant = {
  type: "tableauManquant";
  sévère: true;
  clefManquante: string;
};

export type DifférenceBDTableauSupplémentaire = {
  type: "tableauSupplémentaire";
  sévère: false;
  clefExtra: string;
};

export type DifférenceTableauxBds<
  T extends DifférenceTableaux = DifférenceTableaux,
> = {
  type: "tableau";
  sévère: T["sévère"];
  idTableau: string;
  différence: T;
};

// Types données

export type DonnéesBdExportées = {
  nomBd: string;
  tableaux: DonnéesTableauExportées[];
};

// Types spécification

export type SchémaBd = {
  licence: string;
  licenceContenu?: string;
  métadonnées?: Métadonnées;
  clefUnique?: string;
  motsClefs?: string[];
  nuées?: string[];
  statut?: StatutDonnées;
  tableaux: {
    [idTableau: string]: SchémaTableau;
  };
};

export type SchémaTableau = {
  cols: {
    idColonne: string;
    idVariable?: string;
    index?: boolean;
  }[];
};

// Types score

export interface ScoreBd {
  accès?: number;
  couverture?: number;
  valide?: number;
  infos?: number;
  licence?: number;
  total: number;
}

// Données
export type DonnéesFichierBdExportées = {
  docu: WorkBook;
  documentsMédias: Set<string>;
  nomFichier: string;
};

export const conversionsTypes: { [key: string]: BookType } = {
  xls: "biff8",
};
