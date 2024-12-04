import { roomTypeChoices } from "../constants";
import { getApartmentById } from "../providers/firebase/providers/dataProvider";

export enum Units {
  qm = "m²",
}

export type FliesenType = "wand" | "boden";

export enum VerlegeArtFliese {
  kreuzverband = "kreuzverband",
  drittelverband = "drittelverband",
}

export enum VerlegeArtParkett {
  fisch = "Fischgräte",
  standard = "Standard",
}

export enum VerlegeRichtungBodenFliese {
  senkrechtZurBadezimmerTuer = "senkrechtZurBadezimmerTuer",
  waagerechtZurBadezimmerTuer = "waagerechtZurBadezimmerTuer",
  ohne = "ohne",
}

export enum VerlegeRichtungParkett {
  senkrechtZurWET = "senkrecht zur WET",
  waagrechtZurWET = "waagrecht zur WET",
}

export type FuerBadTyp = "duschbad" | "gästewc" | "vollbad" | "wannenbad";

export type BemusterungsArtikel = {
  id?: string;
  kategorie: string;
  ausgeblendet: boolean;
  bezeichnung: string;
  artNr?: string | null; // Elektroartikel haben keine Artikelnummer
  preis: number;
  bildDateiName?: string | null;
  serie?: string;
  fuerBadTyp?: FuerBadTyp[];
};

export type RoomType = (typeof roomTypeChoices)[number]["id"];

export type RaumMitFliesen = {
  roomType: RoomType;
  bodenFlaeche: number;
  wandFlaeche: number;
  bodenFlieseArtNr?: string;
  wandFlieseArtNr?: string;
  verlegeArtBodenfliese?: VerlegeArtFliese;
  verlegeArtWandfliese?: VerlegeArtFliese;
};

export type RaumMitParkett = {
  parkettArtNr?: string;
  bodenFlaeche: number;
  verlegeArt?: VerlegeArtParkett;
  verlegeRichtung?: VerlegeRichtungParkett;
};

export type Apartment = {
  id: string;
  projectId: string;
  angebotsname?: string;
  angebotsdatum?: Date;
  erwerber?: string;
  datum?: Date;
  name?: string;
  wohnFlaeche: number;
  wohnFlaecheParkett: number;
  stockwerk: string;
  raeumeMitFliesen: RaumMitFliesen[];
  raeumeMitParkett: RaumMitParkett[];
};

export type WQData = {
  id: string;
  name: string;
  created_at: Date;
  bauleiter: string;
  apartments: Apartment[];
  bemusterungs_artikel: BemusterungsArtikel[];
};

export type GetApartmentById = Awaited<
  ReturnType<typeof getApartmentById>
>["data"];
