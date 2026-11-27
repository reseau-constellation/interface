import type { DagCborEncodable } from "@orbitdb/core";
import type { CatégorieVariable } from "./variables.ts";

// Types éléments
export type DonnéesRangéeTableau = {
  [key: string]: DagCborEncodable;
};

export interface DonnéesRangéeTableauAvecId<
  T extends DonnéesRangéeTableau = DonnéesRangéeTableau,
> {
  données: T;
  id: string;
}

// Types scores

export type ScoreCouvertureTableau = {
  numérateur: number;
  dénominateur: number;
};

// Types colonnes

export type InfoColonne = {
  id: string;
  variable?: string;
  index?: boolean;
};

export type InfoColonneAvecCatégorie = InfoColonne & {
  catégorie?: CatégorieVariable;
};

// Types comparaisons tableaux

export type DifférenceTableaux =
  | DifférenceVariableColonne
  | DifférenceIndexColonne
  | DifférenceColonneManquante
  | DifférenceColonneSupplémentaire;

export type DifférenceVariableColonne = {
  type: "variableColonne";
  sévère: true;
  idColonne: string;
  varColTableau?: string;
  varColTableauRéf?: string;
};
export type DifférenceIndexColonne = {
  type: "indexColonne";
  sévère: true;
  idColonne: string;
  colTableauIndexée: boolean;
};
export type DifférenceColonneManquante = {
  type: "colonneManquante";
  sévère: true;
  idColonneManquante: string;
};
export type DifférenceColonneSupplémentaire = {
  type: "colonneSupplémentaire";
  sévère: false;
  idColonneSupplémentaire: string;
};

// Types données tableaux

export type ÉlémentDonnéesTableau = { [clef: string]: DagCborEncodable };

export type DonnéesTableauExportées = {
  nomTableau: string;
  données: DonnéesRangéeTableau[];
  documentsMédias: Set<string>;
};

// Types conversions

export type DonnéeImportation =
  | string
  | number
  | null
  | boolean
  | DonnéeImportation[]
  | { [key: string]: DonnéeImportation }
  | Date
  | Uint8Array
  | undefined;

export type DonnéesRangéeTableauÀImporter = {
  [clef: string]: DonnéeImportation;
};

export type ConversionColonne<T extends ConversionDonnées = ConversionDonnées> =
  {
    colonne: string;
    typeCatégorie?: "simple" | "liste";
    conversion: T;
  };

export type ConversionDonnées =
  | ConversionDonnéesNumérique
  | ConversionDonnéesChaîne
  | ConversionDonnéesFichier
  | ConversionDonnéesAudio
  | ConversionDonnéesVidéo
  | ConversionDonnéesImage
  | ConversionDonnéesBooléen
  | ConversionDonnéesChaîneNonTraductible
  | ConversionDonnéesHoroDatage
  | ConversionDonnéesIntervaleTemps
  | ConversionDonnéesGéojson;

export type ConversionDonnéesNumérique = {
  type: "numérique";
  opération?: OpérationConversionNumérique | OpérationConversionNumérique[];
  systèmeNumération?: string;
};

export type OpérationConversionNumérique = {
  op: "+" | "-" | "/" | "*" | "^";
  val: number;
};

export type ConversionDonnéesChaîne = {
  type: "chaîne";
  langue?: string;
};

export type ConversionDonnéesFichiers =
  | ConversionDonnéesFichier
  | ConversionDonnéesAudio
  | ConversionDonnéesImage
  | ConversionDonnéesVidéo;

export type ConversionDonnéesFichier = {
  type: "fichier";
  baseChemin?: string;
};

export type ConversionDonnéesAudio = Omit<ConversionDonnéesFichier, "type"> & {
  type: "audio";
};

export type ConversionDonnéesImage = Omit<ConversionDonnéesFichier, "type"> & {
  type: "image";
};

export type ConversionDonnéesVidéo = Omit<ConversionDonnéesFichier, "type"> & {
  type: "vidéo";
};

export type ConversionDonnéesBooléen = {
  type: "booléen";
};

export type ConversionDonnéesChaîneNonTraductible = {
  type: "chaîneNonTraductible";
};

export type ConversionDonnéesHoroDatage = {
  type: "horoDatage";
  détails?: {
    système: string;
    format?: string;
  };
};

export type ConversionDonnéesIntervaleTemps = {
  type: "intervaleTemps";
};

export type ConversionDonnéesGéojson = {
  type: "géojson";
};
