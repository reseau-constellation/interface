export type Suivi<T> = (x: T) => void | Promise<void>;

export type Oublier = () => Promise<void>;

export type RetourRecherche<N extends string = string> = {
  oublier: Oublier;
} & { [C in N]: (n: number) => Promise<void> };

export type RetourRechercheProfondeur = {
  oublier: Oublier;
  profondeur: (p: number) => Promise<void>;
};

export type TraducsTexte = { [langue: string]: string };
export type SansNonDéfinis<T> = { [C in keyof T]: Exclude<T[C], undefined> };

export type PartielRécursif<T> = {
  [P in keyof T]?: T[P] extends object ? PartielRécursif<T[P]> : T[P];
};

export type RequisRécursif<T> = {
  [P in keyof T]-?: T[P] extends object ? RequisRécursif<T[P]> : T[P];
};

export type FonctionRésolveur<T, S> = (
  args: T & { f: Suivi<S> },
) => Promise<Oublier>;

export type Résolveur<T, S> = FonctionRésolveur<T, S> & {
  fermer: () => Promise<void>;
};
