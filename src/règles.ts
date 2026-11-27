import type { CatégorieVariable } from "./variables.ts";

export type SourceRègle =
  | { type: "variable"; id: string }
  | { type: "tableau"; idStructure: string; idTableau: string };

export type RègleVariableAvecId<T extends RègleVariable = RègleVariable> = {
  id: string;
  règle: T;
};

export type RègleVariable =
  | RègleIndexUnique
  | RègleExiste
  | RègleBornes
  | RègleValeurCatégorique
  | RègleCatégorie;

export type SpécificationRègleColonne<T extends RègleVariable = RègleVariable> =
  {
    règle: T;
    colonne: string;
  };

export type RègleColonne<T extends RègleVariable = RègleVariable> = {
  règle: RègleVariableAvecId<T>;
  source: SourceRègle;
  colonne: string;
};

export type Op = ">" | "<" | ">=" | "<=" | "≥" | "≤";

export type RègleIndexUnique = {
  type: "indexUnique";
};

export type RègleExiste = {
  type: "existe";
  détails: DétailsRègleExiste;
};

export type DétailsRègleExiste = Record<string, never>;

export type RègleBornes<T extends DétailsRègleBornes = DétailsRègleBornes> = {
  type: "bornes";
  détails: T;
};

// Peut être numérique ou bien l'id d'une autre variable ou l'id d'une colonne sur la même BD ou Nuée
export type DétailsRègleBornes =
  | DétailsRègleBornesFixe
  | DétailsRègleBornesDynamiqueColonne
  | DétailsRègleBornesDynamiqueVariable;

export type DétailsRègleBornesFixe = {
  type: "fixe";
  val: number;
  op: Op;
};

export type DétailsRègleBornesDynamiqueColonne = {
  type: "dynamiqueColonne";
  val: string;
  op: Op;
};

export type DétailsRègleBornesDynamiqueVariable = {
  type: "dynamiqueVariable";
  val: string;
  op: Op;
};

export type RègleValeurCatégorique<
  T extends DétailsRègleValeurCatégorique = DétailsRègleValeurCatégorique,
> = {
  type: "valeurCatégorique";
  détails: T;
};

export type DétailsRègleValeurCatégorique =
  DétailsRègleValeurCatégoriqueFixe | DétailsRègleValeurCatégoriqueDynamique;

export type DétailsRègleValeurCatégoriqueFixe = {
  type: "fixe";
  options: (string | number | boolean)[];
};

export type DétailsRègleValeurCatégoriqueDynamique = {
  type: "dynamique";
  structure: string;
  tableau: string;
  colonne: string;
};

export type RègleCatégorie = {
  type: "catégorie";
  détails: DétailsRègleCatégorie;
};

export type DétailsRègleCatégorie = {
  catégorie: CatégorieVariable;
};

// Erreurs

export type ErreurColonne = ErreurColonneVariableDédoublée;
export type ErreurColonneVariableDédoublée = {
  type: "variableDédoublée";
  colonnes: string[];
};

export type ErreurDonnée<T extends RègleVariable = RègleVariable> = {
  id: string;
  erreur: RègleColonne<T>;
};

export type ErreurRègle =
  | ErreurRègleCatégoriqueTableauInexistant
  | ErreurRègleCatégoriqueColonneInexistante
  | ErreurRègleBornesColonneInexistante
  | ErreurRègleBornesVariableNonPrésente;

export type ErreurRègleCatégoriqueTableauInexistant = {
  règle: RègleColonne<
    RègleValeurCatégorique<DétailsRègleValeurCatégoriqueDynamique>
  >;
  type: "tableauCatégInexistant";
};

export type ErreurRègleCatégoriqueColonneInexistante = {
  règle: RègleColonne<
    RègleValeurCatégorique<DétailsRègleValeurCatégoriqueDynamique>
  >;
  type: "colonneCatégInexistante";
};

export type ErreurRègleBornesColonneInexistante = {
  règle: RègleColonne<RègleBornes<DétailsRègleBornesDynamiqueColonne>>;
  type: "colonneBornesInexistante";
};

export type ErreurRègleBornesVariableNonPrésente = {
  règle: RègleColonne<RègleBornes<DétailsRègleBornesDynamiqueVariable>>;
  type: "variableBornesNonPrésente";
};
