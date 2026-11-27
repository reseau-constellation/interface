export type Rôle = (typeof rôles)[number];

export type AccèsUtilisateur = {
  rôle: Rôle;
  idCompte: string;
};

export type AccèsDispositif = {
  rôle: Rôle;
  idDispositif: string;
};

export const MODÉRATRICE = "MODÉRATRICE";
export const MEMBRE = "MEMBRE";

export const rôles = [MODÉRATRICE, MEMBRE] as const;
