import type { ÉpingleBd } from "./bds.ts";
import type { BaseÉpingleFavoris } from "./favoris.ts";
import type { InfoAuteur } from "./objets.ts";
import type {
  DifférenceTableaux,
  DonnéesRangéeTableauAvecId,
} from "./tableaux.ts";

// Types épingles
export type ÉpingleNuée = {
  type: "nuées";
  épingle: ContenuÉpingleNuée;
};

export type ContenuÉpingleNuée = BaseÉpingleFavoris & {
  bds: ÉpingleBd["épingle"];
};

// Types filtres

export type Héritage = { descendance?: boolean; ascendance?: boolean };

export type FiltresBds = {
  licences?: string[];
  ignorerAutorisation?: boolean | "les miennes";
};

// Types tableaux

export type InfoTableauNuée = {
  id: string;
  source: string;
};

export type ValeurAscendance<T> = {
  val: T;
  source: string;
};

// Types autorisation

export type AutorisationNuée =
  AutorisationNuéeOuverte | AutorisationNuéeParInvitation;

export type AutorisationNuéeOuverte = {
  type: "ouverte";
  bloqués: string[];
};

export type AutorisationNuéeParInvitation = {
  type: "par invitation";
  invités: string[];
};

// Types score

export type ScoreNuée = {
  accès?: number;
  infos?: number;
  couverture?: number;
  total: number;
};

// Types filtres

export type FiltresDonnées = {
  exclureAvecDifférencesTableaux?: DifférenceTableaux["type"][];
  exclureAvecErreursDonnées?: boolean;
};

// Types données et exportation

export type DonnéesRangéeNuée = {
  idBd: string;
  données: DonnéesRangéeTableauAvecId;
  auteurs: InfoAuteur[];
};

export type DonnéesTableauNuéeExportées = {
  nomTableau: string;
  données: DonnéesRangéeNuée[];
  documentsMédias: Set<string>;
};
