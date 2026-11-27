
import type { Signature } from "./orbite.ts";
import type { FonctionRésolveur, Résolveur } from "./utils.ts";

// Types connexions
export type ConnexionLibp2p = {
    pair: string;
    adresses: string[];
    depuis: number;
  };
  
  export type ConnexionDispositif = {
    idDispositif: string;
    pair: ConnexionLibp2p;
  };
  
  export type ConnexionCompte = {
    idCompte: string;
    dispositifs: ConnexionDispositif[];
  };
  
  // Types dispositifs
  export type DispositifCompte = {
    idDispositif: string;
    statut: "invité" | "accepté";
  };
  
  // Types relations
  
  export type FonctionRésolveurConfianceRéseau = FonctionRésolveur<
    { de: string },
    RelationImmédiate[]
  >;
  export type RésolveurConfianceRéseau = Résolveur<
    { de: string },
    RelationImmédiate[]
  >;
  
  export type CompteBloqué = { idCompte: string; privé: boolean };
  
  export type RelationRéseau = {
    de: string;
    pour: string;
    confiance: number;
    profondeur: number;
  };
  
  export type RelationImmédiate = { idCompte: string; confiance: number };
  
  export type CompteRéseau = {
    idCompte: string;
    confiance: number;
    profondeur: number;
  };
  
  export type InfosPair = {
    idPair: string;
    infos?: {
      idDispositif: string;
      idCompte: string;
      signature: Signature;
    };
  };
  
  export type InfosComplètesPair = Required<InfosPair>;

// Ajout dispositifs

export type RequêteRejoindreCompte = {
    idDispositif: string;
    codeSecret: string;
  };
  
  export type InvitationRejoindreCompte = {
    idCompte: string;
    idPair: string;
    codeSecret: string;
  };