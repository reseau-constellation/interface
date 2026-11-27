import type { DagCborEncodable } from "@orbitdb/core";
import type { Rôle } from "./accès.ts";

export type TYPES_STATUT = "interne" | "jouet" | "active" | "obsolète";

export type StatutDonnées =
  | {
      statut: Exclude<TYPES_STATUT, "obsolète">;
    }
  | {
      statut: "obsolète";
      idNouvelle?: string;
    };

export type Métadonnées = { [clef: string]: DagCborEncodable };

export type InfoAuteur = {
  idCompte: string;
  accepté: boolean;
  rôle: Rôle;
};
