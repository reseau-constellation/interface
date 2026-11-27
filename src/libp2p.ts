import type { PrivateKey, ServiceMap } from "@libp2p/interface";
import type { Libp2pOptions } from "libp2p";

export type ConfigLibp2p = {
  dossier?: string;
  domaines?: string[];
  pairsParDéfaut?: string[];
  sujetsDécouvertePairsPubSub?: string[];
  clefPrivée?: PrivateKey;
};

export type GénérateurOptionsLibp2p<L extends ServiceMap> = (args: {
  dossier: string;
  clefPrivée?: PrivateKey;
  mode: "dév" | "prod";
}) => Promise<Libp2pOptions<L>>;
