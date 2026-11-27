// Données de https://github.com/github/choosealicense.com
export const conditions = {
  ATTR: "attribution",
  ÉGAL: "partageÉgal",
  INCL: "inclureDroitDauteur",
  CHNG: "indiquerChangements",
  SRCE: "partagerCodeSource",
  USGR: "usagereseau",
} as const;

export const droits = {
  PRTG: "partager",
  ADPT: "adapter",
  CMRC: "usageComercial",
  PRV: "usagePrivé",
  BREV: "usageBrevets",
};

export const limitations = {
  RSP: "aucuneResponsabilité",
  GRNT: "aucuneGarantie",
  MRCM: "marqueCommerce",
  BREV: "brevetExclu",
  SOUS: "sousLicence",
};

export const catégories = {
  BD: "basesDeDonnées",
  ART: "artistique",
  CODE: "codeInformatique",
  AUTRE: "autre",
} as const;

export type InfoLicence = {
  conditions: (typeof conditions)[keyof typeof conditions][];
  droits: (typeof droits)[keyof typeof droits][];
  limitations: (typeof limitations)[keyof typeof limitations][];
  catégorie: (typeof catégories)[keyof typeof catégories];
  spécialisée?: boolean;
};

export type InfoLicenceAvecCode = InfoLicence & {
  code: string;
};
