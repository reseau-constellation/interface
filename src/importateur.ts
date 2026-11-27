export type ClefsExtractionNonNul = (string | number)[];
export type ClefsExtraction = (string | number | -1)[];

export type ValsJSON =
  number | string | boolean | ValsJSON[] | { [key: string]: ValsJSON };

export type ÉlémentDicJSON = { [key: string]: ValsJSON };
export type ÉlémentListeJSON = ValsJSON[];
export type ÉlémentJSON = ÉlémentDicJSON | ÉlémentListeJSON;
export type DonnéesJSON = ÉlémentJSON | ÉlémentJSON[];
