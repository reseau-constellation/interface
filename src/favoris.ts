import type { PartielRécursif, FonctionRésolveur, Résolveur } from "./utils.ts";

// Types réplications
export type Réplication<T extends BaseÉpingleFavoris = BaseÉpingleFavoris> = {
  idDispositif: string;
  épingle: BooléenniserÉpingle<ÉpingleFavoris<T>>;
};

// Types épingles

export const TOUS_DISPOSITIFS = "TOUS" as const;
export const DISPOSITIFS_INSTALLÉS = "INSTALLÉS" as const;
export const AUCUN_DISPOSITIF = "AUCUN" as const;

export type DispositifsÉpingle =
  | string
  | string[]
  | typeof TOUS_DISPOSITIFS
  | typeof DISPOSITIFS_INSTALLÉS
  | typeof AUCUN_DISPOSITIF;

export type ÉpingleFavoris<
  T extends BaseÉpingleFavoris = BaseÉpingleFavoris,
  U extends string = string,
> = {
  type: U;
  épingle: PartielRécursif<T>;
};

export type BaseÉpingleFavoris = {
  base: DispositifsÉpingle;
};

export type ÉpingleFavorisAvecId<
  T extends BaseÉpingleFavoris = BaseÉpingleFavoris,
  U extends string = string,
> = {
  idObjet: string;
  épingle: ÉpingleFavoris<T, U>;
};

export type BooléenniserÉpingle<T extends ÉpingleFavoris> = {
  type: T["type"];
  épingle: {
    [clef in keyof T["épingle"]]?: T["épingle"][clef] extends ÉpingleFavoris
      ? BooléenniserÉpingle<T["épingle"][clef]>
      : T["épingle"][clef] extends object
        ? PartielRécursif<BooléenniserPropriétés<T["épingle"][clef]>>
        : boolean;
  };
};

export type ÉpingleFavorisBooléenniséeAvecId<
  T extends ÉpingleFavoris = ÉpingleFavoris,
> = {
  idObjet: string;
  épingle: BooléenniserÉpingle<T>;
};

export type BooléenniserPropriétés<T extends object> = {
  [clef in keyof T]?: T[clef] extends object
    ? BooléenniserPropriétés<T[clef]>
    : boolean;
};

// Type résolveur

export type FonctionRésolveurFavoris<
  T extends ÉpingleFavoris = ÉpingleFavoris,
> = FonctionRésolveur<
  {
    épingle: ÉpingleFavorisBooléenniséeAvecId<T>;
    signal: AbortSignal;
    ignorer: Set<string>;
  },
  Set<string>
>;

export type RésolveurFavoris<T extends ÉpingleFavoris = ÉpingleFavoris> =
  Résolveur<
    {
      épingle: ÉpingleFavorisBooléenniséeAvecId<T>;
      signal: AbortSignal;
      ignorer: Set<string>;
    },
    Set<string>
  >;
