
import type { Oublier, Suivi } from "./fonctions.js";

export interface InfoRésultatTexte {
  type: "texte";
  texte: string;
  début: number;
  fin: number;
}

export interface InfoRésultatVide {
  type: "vide";
}

export interface InfoRésultatRecherche<T extends InfoRésultat = InfoRésultat> {
  type: "résultat";
  de: string;
  clef?: string;
  info: T;
}

export type InfoRésultat =
  InfoRésultatTexte | InfoRésultatVide | InfoRésultatRecherche;

export interface RésultatObjectifRecherche<
  T extends InfoRésultat = InfoRésultat,
> extends InfoRésultatRecherche<T> {
  score: number;
}

export interface RésultatRecherche<T extends InfoRésultat = InfoRésultat> {
  résultatObjectif: RésultatObjectifRecherche<T>;
  id: string;
}

export type SuivreConfianceRecherche = (args: {
  idObjet: string;
  f: Suivi<number>;
}) => Promise<Oublier>;

export type SuivreQualitéRecherche = (args: {
  idObjet: string;
  f: Suivi<number>;
}) => Promise<Oublier>;
